#!/bin/bash

# Deploy React app to AWS S3 and CloudFront
# Uses rewatchables-runner profile for deployment

BUCKET_NAME="rewatchable-streams-webapp-1757203168"
REGION="us-east-2"
CLOUDFRONT_DISTRIBUTION_ID="E7U2S8GNRUT2S"
PROFILE="rewatchables-runner"

echo "Building React app..."
npm run build

echo "Uploading to S3..."
AWS_PROFILE=$PROFILE aws s3 sync build/ s3://$BUCKET_NAME --delete

echo "Invalidating CloudFront cache..."
AWS_PROFILE=$PROFILE aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
echo "HTTPS Website URL: https://d2is5arv1ipfdl.cloudfront.net"
echo "S3 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
