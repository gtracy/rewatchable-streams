#!/bin/bash
set -euo pipefail

# Deploy Lambda function for rewatchable streams data generation
# Make sure you have AWS CLI configured with appropriate credentials

FUNCTION_NAME="rewatchable-streams-www-job"
REGION="${AWS_REGION:-us-east-2}"
AWS_ARGS=()
if [ -n "${AWS_PROFILE:-}" ]; then
    AWS_ARGS=(--profile "$AWS_PROFILE")
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STAGE_DIR="$(mktemp -d)"
ZIP_FILE="$(mktemp -u /tmp/www_job-XXXXXX.zip)"
trap 'rm -rf "$STAGE_DIR" "$ZIP_FILE"' EXIT

echo "Staging production files..."
cp "$SCRIPT_DIR/app.js" \
   "$SCRIPT_DIR/app-lambda.js" \
   "$SCRIPT_DIR/seo-artifacts.js" \
   "$SCRIPT_DIR/static-pages.js" \
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
        --role arn:aws:iam::315817266687:role/lambda-execution-role \
        --handler app-lambda.handler \
        --zip-file "fileb://$ZIP_FILE" \
        --region "$REGION" \
        --description "Generates JSON data for rewatchable streams website" \
        --timeout 300 \
        --memory-size 512 \
        --environment 'Variables={PODCAST_MOVIES_TABLE=podcast_movies,MOVIE_STREAMS_TABLE=movie_streams,S3_BUCKET=rewatchables,S3_KEY=data_files/podcast_movie_data.json,WEBAPP_PREFIX=webapp,CLOUDFRONT_DISTRIBUTION_ID=E3UTGKV2VWOXDQ}' \
        --tags Project=rewatchable-streams,Environment=production,Purpose=data-generation
fi

echo "Deployment complete!"
echo "Function name: $FUNCTION_NAME"
echo "To test: AWS_PROFILE=${AWS_PROFILE:-<profile>} aws lambda invoke --function-name $FUNCTION_NAME --region $REGION response.json"
