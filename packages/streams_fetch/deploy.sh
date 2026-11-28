#!/bin/bash
set -euo pipefail

# Deploy Lambda function for fetching streaming availability on new DynamoDB movie inserts
# Respects AWS_PROFILE and AWS_REGION from the environment
# Preserves monorepo layout because the Lambda handler is packages/streams_fetch/app-lambda.handler

FUNCTION_NAME="${FUNCTION_NAME:-rewatchables-stream-fetch}"
REGION="${AWS_REGION:-us-east-2}"
AWS_ARGS=()
if [ -n "${AWS_PROFILE:-}" ]; then
    AWS_ARGS=(--profile "$AWS_PROFILE")
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
STAGE_DIR="$(mktemp -d)"
ZIP_FILE="$(mktemp -u /tmp/streams_fetch-XXXXXX.zip)"
trap 'rm -rf "$STAGE_DIR" "$ZIP_FILE"' EXIT

echo "Staging production files..."
mkdir -p "$STAGE_DIR/packages/streams_fetch" "$STAGE_DIR/utils"

cp "$REPO_ROOT/config.js" "$STAGE_DIR/config.js"

cp "$SCRIPT_DIR/app.js" \
   "$SCRIPT_DIR/app-lambda.js" \
   "$SCRIPT_DIR/package.json" \
   "$SCRIPT_DIR/package-lock.json" \
   "$STAGE_DIR/packages/streams_fetch/"

cp "$REPO_ROOT/utils/streams.js" \
   "$REPO_ROOT/utils/package.json" \
   "$REPO_ROOT/utils/package-lock.json" \
   "$STAGE_DIR/utils/"

echo "Installing production dependencies..."
(cd "$STAGE_DIR/packages/streams_fetch" && npm ci --omit=dev)
(cd "$STAGE_DIR/utils" && npm ci --omit=dev)

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
        --role arn:aws:iam::315817266687:role/rewatchables-rss-reader \
        --handler packages/streams_fetch/app-lambda.handler \
        --zip-file "fileb://$ZIP_FILE" \
        --region "$REGION" \
        --description "Fetches streaming availability for newly inserted podcast_movies records" \
        --timeout 30 \
        --memory-size 128 \
        --tags Project=rewatchable-streams,Environment=production,Purpose=streams-fetch
fi

echo "Deployment complete!"
echo "Function name: $FUNCTION_NAME"
echo "To test: AWS_PROFILE=${AWS_PROFILE:-<profile>} aws lambda invoke --function-name $FUNCTION_NAME --region $REGION response.json"
