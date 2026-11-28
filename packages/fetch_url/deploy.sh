#!/bin/bash
set -euo pipefail

# Deploy fetch_url Lambda function
# Uses rewatchables-runner profile for deployment

FUNCTION_NAME="rewatchables-fetch_url"
REGION="${AWS_REGION:-us-east-2}"
AWS_ARGS=()
if [ -n "${AWS_PROFILE:-}" ]; then
    AWS_ARGS=(--profile "$AWS_PROFILE")
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STAGE_DIR="$(mktemp -d)"
ZIP_FILE="$(mktemp -u /tmp/fetch_url-XXXXXX.zip)"
trap 'rm -rf "$STAGE_DIR" "$ZIP_FILE"' EXIT

echo "Staging production files..."
cp "$SCRIPT_DIR/app.js" \
   "$SCRIPT_DIR/app-lambda.js" \
   "$SCRIPT_DIR/package.json" \
   "$SCRIPT_DIR/package-lock.json" \
   "$STAGE_DIR/"

echo "Installing production dependencies..."
(cd "$STAGE_DIR" && npm ci --omit=dev)

echo "Creating deployment package..."
(cd "$STAGE_DIR" && zip -r "$ZIP_FILE" .)

echo "Deploying Lambda function..."
aws "${AWS_ARGS[@]}" lambda update-function-code \
    --function-name "$FUNCTION_NAME" \
    --zip-file "fileb://$ZIP_FILE" \
    --region "$REGION"

echo "✅ Lambda function deployed successfully!"
echo "Function: $FUNCTION_NAME"
echo "Region: $REGION"
echo "Deployment complete!"
