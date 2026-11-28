#!/bin/bash
set -euo pipefail

# Deploy Lambda function for rewatchable streams data generation
# Make sure you have AWS CLI configured with appropriate credentials

FUNCTION_NAME="rewatchable-streams-www-job"
PROFILE="rewatchables-runner"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STAGE_DIR="$(mktemp -d)"
ZIP_FILE="$(mktemp -u /tmp/www_job-XXXXXX.zip)"
trap 'rm -rf "$STAGE_DIR" "$ZIP_FILE"' EXIT

echo "Staging production files..."
cp "$SCRIPT_DIR/app.js" \
   "$SCRIPT_DIR/app-lambda.js" \
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
if AWS_PROFILE="$PROFILE" aws lambda get-function --function-name "$FUNCTION_NAME" >/dev/null 2>&1; then
    echo "Updating existing Lambda function..."
    AWS_PROFILE="$PROFILE" aws lambda update-function-code \
        --function-name "$FUNCTION_NAME" \
        --zip-file "fileb://$ZIP_FILE"
else
    echo "Creating new Lambda function..."
    AWS_PROFILE="$PROFILE" aws lambda create-function \
        --function-name "$FUNCTION_NAME" \
        --runtime nodejs22.x \
        --role arn:aws:iam::315817266687:role/lambda-execution-role \
        --handler app-lambda.handler \
        --zip-file "fileb://$ZIP_FILE" \
        --description "Generates JSON data for rewatchable streams website" \
        --timeout 300 \
        --memory-size 512 \
        --environment 'Variables={PODCAST_MOVIES_TABLE=podcast_movies,MOVIE_STREAMS_TABLE=movie_streams,S3_BUCKET=rewatchables,S3_KEY=data_files/podcast_movie_data.json}' \
        --tags Project=rewatchable-streams,Environment=production,Purpose=data-generation
fi

echo "Deployment complete!"
echo "Function name: $FUNCTION_NAME"
echo "To test: AWS_PROFILE=$PROFILE aws lambda invoke --function-name $FUNCTION_NAME response.json"
