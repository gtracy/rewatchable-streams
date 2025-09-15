#!/bin/bash

# Complete deployment script for React webapp to rewatchables bucket
# Deploys to s3://rewatchables/webapp/ and updates CloudFront

BUCKET_NAME="rewatchables"
WEBAPP_FOLDER="webapp"
REGION="us-east-2"
CLOUDFRONT_DISTRIBUTION_ID="E3UTGKV2VWOXDQ"
PROFILE="default"

echo "🚀 Starting webapp deployment to rewatchables bucket..."

# Step 1: Build React app without public URL (CloudFront handles path)
echo "📦 Building React app for CloudFront..."
PUBLIC_URL= npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Exiting."
    exit 1
fi

# Step 2: Upload to S3
echo "☁️  Uploading to S3 bucket: s3://$BUCKET_NAME/$WEBAPP_FOLDER/"
AWS_PROFILE=$PROFILE aws s3 sync build/ s3://$BUCKET_NAME/$WEBAPP_FOLDER/ --delete

if [ $? -ne 0 ]; then
    echo "❌ S3 upload failed. Exiting."
    exit 1
fi

# Step 3: Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache for /webapp/*..."
AWS_PROFILE=$PROFILE aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/webapp/*"

if [ $? -ne 0 ]; then
    echo "⚠️  CloudFront invalidation failed, but deployment may still be successful"
else
    echo "✅ CloudFront cache invalidated"
fi

echo ""
echo "🎉 Deployment complete!"
echo "📍 CloudFront URL: https://d17j4vszgpwat2.cloudfront.net/"
echo "🌐 Custom Domain: https://watchthatpod.com/"
echo "📁 S3 Path: s3://$BUCKET_NAME/$WEBAPP_FOLDER/"
echo ""
echo "Note: CloudFront changes may take 10-15 minutes to propagate globally."
