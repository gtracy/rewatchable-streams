#!/bin/bash
set -euo pipefail

# Complete deployment script for React webapp to rewatchables bucket
# Deploys to s3://rewatchables/webapp/ and updates CloudFront

BUCKET_NAME="rewatchables"
WEBAPP_FOLDER="webapp"
REGION="${AWS_REGION:-us-east-2}"
CLOUDFRONT_DISTRIBUTION_ID="E3UTGKV2VWOXDQ"
AWS_ARGS=()
if [ -n "${AWS_PROFILE:-}" ]; then
    AWS_ARGS=(--profile "$AWS_PROFILE")
fi

echo "🚀 Starting webapp deployment to rewatchables bucket..."
if [ -n "${AWS_PROFILE:-}" ]; then
    echo "🔑 Using AWS profile: $AWS_PROFILE"
fi

# Step 1: Build React app without public URL (CloudFront handles path)
echo "📦 Building React app for CloudFront..."
PUBLIC_URL= npm run build

# Step 2: Upload to S3
echo "☁️  Uploading to S3 bucket: s3://$BUCKET_NAME/$WEBAPP_FOLDER/"
aws "${AWS_ARGS[@]}" s3 sync build/ "s3://$BUCKET_NAME/$WEBAPP_FOLDER/" --region "$REGION" --delete --exclude "llms-full.txt" --exclude "movie/*" --exclude "streaming/*"

# Step 3: Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache for /*..."
if aws "${AWS_ARGS[@]}" cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*"; then
    echo "✅ CloudFront cache invalidated"
else
    echo "⚠️  CloudFront invalidation failed, but deployment may still be successful"
fi

echo ""
echo "🎉 Deployment complete!"
echo "📍 CloudFront URL: https://d17j4vszgpwat2.cloudfront.net/"
echo "🌐 Custom Domain: https://watchthatpod.com/"
echo "📁 S3 Path: s3://$BUCKET_NAME/$WEBAPP_FOLDER/"
echo ""
echo "Note: CloudFront changes may take 10-15 minutes to propagate globally."
