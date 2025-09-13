#!/bin/bash

# Complete deployment script for React webapp to rewatchables bucket
# Deploys to s3://rewatchables/webapp/ and updates CloudFront

BUCKET_NAME="rewatchables"
WEBAPP_FOLDER="webapp"
REGION="us-east-2"
CLOUDFRONT_DISTRIBUTION_ID="E7U2S8GNRUT2S"
PROFILE="rewatchables-runner"

echo "🚀 Starting webapp deployment to rewatchables bucket..."

# Step 1: Build React app with correct public URL
echo "📦 Building React app with /webapp/ public URL..."
npm run build

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

# Step 3: Update CloudFront distribution (if needed)
echo "🌐 Checking if CloudFront needs updating..."
CURRENT_ORIGIN=$(AWS_PROFILE=$PROFILE aws cloudfront get-distribution-config --id $CLOUDFRONT_DISTRIBUTION_ID --query 'DistributionConfig.Origins.Items[0].DomainName' --output text)

if [ "$CURRENT_ORIGIN" != "rewatchables.s3.amazonaws.com" ]; then
    echo "🔄 Updating CloudFront distribution for new origin..."
    ./update-cloudfront-webapp.sh
else
    echo "✅ CloudFront already configured for rewatchables bucket"
fi

# Step 4: Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache for /webapp/*..."
AWS_PROFILE=$PROFILE aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/webapp/*"

if [ $? -ne 0 ]; then
    echo "⚠️  CloudFront invalidation failed, but deployment may still be successful"
else
    echo "✅ CloudFront cache invalidated"
fi

echo ""
echo "🎉 Deployment complete!"
echo "📍 Webapp URL: https://d2is5arv1ipfdl.cloudfront.net/webapp/"
echo "📁 S3 Path: s3://$BUCKET_NAME/$WEBAPP_FOLDER/"
echo ""
echo "Note: CloudFront changes may take 10-15 minutes to propagate globally."
