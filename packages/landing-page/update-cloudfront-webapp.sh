#!/bin/bash

# Update CloudFront distribution to support /webapp/ path
# Uses rewatchables-runner profile for deployment

DISTRIBUTION_ID="E7U2S8GNRUT2S"
PROFILE="rewatchables-runner"
CONFIG_FILE="cloudfront-webapp-config.json"

echo "Getting current CloudFront distribution configuration..."
AWS_PROFILE=$PROFILE aws cloudfront get-distribution-config --id $DISTRIBUTION_ID > current-distribution.json

echo "Extracting ETag from current configuration..."
ETAG=$(AWS_PROFILE=$PROFILE aws cloudfront get-distribution-config --id $DISTRIBUTION_ID --query 'ETag' --output text)

echo "Updating CloudFront distribution with new webapp configuration..."
AWS_PROFILE=$PROFILE aws cloudfront update-distribution \
    --id $DISTRIBUTION_ID \
    --distribution-config file://$CONFIG_FILE \
    --if-match $ETAG

echo "CloudFront distribution update initiated!"
echo "Note: Changes may take 10-15 minutes to propagate globally."
echo "Webapp will be available at: https://d2is5arv1ipfdl.cloudfront.net/webapp/"
