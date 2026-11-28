#!/bin/bash
set -euo pipefail

# Deploy React app to AWS S3 and CloudFront
# Uses rewatchables-runner profile for deployment

BUCKET_NAME="rewatchables"
WEBAPP_FOLDER="webapp"
REGION="${AWS_REGION:-us-east-2}"
CLOUDFRONT_DISTRIBUTION_ID="E3UTGKV2VWOXDQ"
AWS_ARGS=()
if [ -n "${AWS_PROFILE:-}" ]; then
    AWS_ARGS=(--profile "$AWS_PROFILE")
fi

echo "Building React app..."
npm run build

echo "Uploading to S3..."
aws "${AWS_ARGS[@]}" s3 sync build/ "s3://$BUCKET_NAME/$WEBAPP_FOLDER/" --region "$REGION" --delete --exclude "llms-full.txt" --exclude "movie/*" --exclude "streaming/*"

echo "Invalidating CloudFront cache..."
aws "${AWS_ARGS[@]}" cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*"

echo "Deployment complete!"
echo "CloudFront URL: https://d17j4vszgpwat2.cloudfront.net/"
echo "Custom Domain: https://watchthatpod.com/"
echo "S3 Path: s3://$BUCKET_NAME/$WEBAPP_FOLDER/"
