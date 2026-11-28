#!/bin/bash
set -euo pipefail

# Deploy Lambda function for The Rewatchables RSS feed polling
# Respects AWS_PROFILE and AWS_REGION from the environment

FUNCTION_NAME="${FUNCTION_NAME:-rewatchables-rss-polling}"
REGION="${AWS_REGION:-us-east-2}"
AWS_ARGS=()
if [ -n "${AWS_PROFILE:-}" ]; then
    AWS_ARGS=(--profile "$AWS_PROFILE")
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STAGE_DIR="$(mktemp -d)"
ZIP_FILE="$(mktemp -u /tmp/rss_polling-XXXXXX.zip)"
trap 'rm -rf "$STAGE_DIR" "$ZIP_FILE"' EXIT

echo "Staging production files..."
cp "$SCRIPT_DIR/app.js" \
   "$SCRIPT_DIR/app-lambda.js" \
   "$SCRIPT_DIR/title.js" \
   "$SCRIPT_DIR/package.json" \
   "$SCRIPT_DIR/package-lock.json" \
   "$STAGE_DIR/"
if [ -f "$SCRIPT_DIR/../../config.js" ]; then
    cp "$SCRIPT_DIR/../../config.js" "$STAGE_DIR/config.js"
fi

echo "Installing production dependencies..."
(cd "$STAGE_DIR" && npm ci --omit=dev)

echo "Creating deployment package..."
(cd "$STAGE_DIR" && zip -r "$ZIP_FILE" .)

echo "Checking if Lambda function exists..."
if aws "${AWS_ARGS[@]}" lambda get-function --function-name "$FUNCTION_NAME" --region "$REGION" >/dev/null 2>&1; then
    echo "Updating existing Lambda function..."
    aws "${AWS_ARGS[@]}" lambda update-function-code \
        --function-name "$FUNCTION_NAME" \
        --zip-file "fileb://$ZIP_FILE" \
        --region "$REGION"
else
    echo "Creating new Lambda function..."
    aws "${AWS_ARGS[@]}" lambda create-function \
        --function-name "$FUNCTION_NAME" \
        --runtime nodejs22.x \
        --role arn:aws:iam::315817266687:role/rewatchables-runner \
        --handler app-lambda.handler \
        --zip-file "fileb://$ZIP_FILE" \
        --region "$REGION" \
        --description "Polls The Rewatchables RSS feed and stores new movie episodes in DynamoDB" \
        --timeout 300 \
        --memory-size 256 \
        --tags Project=rewatchable-streams,Environment=production,Purpose=rss-polling
fi

echo "Deployment complete!"
echo "Function name: $FUNCTION_NAME"
echo "To test: AWS_PROFILE=${AWS_PROFILE:-<profile>} aws lambda invoke --function-name $FUNCTION_NAME --region $REGION response.json"
