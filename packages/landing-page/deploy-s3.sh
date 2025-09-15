#!/bin/bash

# Deploy React app to AWS S3 and CloudFront
# Uses rewatchables-runner profile for deployment

BUCKET_NAME="rewatchables"
WEBAPP_FOLDER="webapp"
REGION="us-east-2"
CLOUDFRONT_DISTRIBUTION_ID="E3UTGKV2VWOXDQ"
PROFILE="default"

echo "Building React app..."
npm run build

echo "Uploading to S3..."
AWS_PROFILE=$PROFILE aws s3 sync build/ s3://$BUCKET_NAME/$WEBAPP_FOLDER/ --delete

echo "Invalidating CloudFront cache..."
AWS_PROFILE=$PROFILE aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/webapp/*"

echo "Deployment complete!"
echo "CloudFront URL: https://d17j4vszgpwat2.cloudfront.net/"
echo "Custom Domain: https://watchthatpod.com/"
echo "S3 Path: s3://$BUCKET_NAME/$WEBAPP_FOLDER/"
