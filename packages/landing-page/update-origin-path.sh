#!/bin/bash

# Update CloudFront distribution to use /webapp/ as origin path
# This is simpler than changing the entire origin

DISTRIBUTION_ID="E7U2S8GNRUT2S"
PROFILE="rewatchables-runner"

echo "Getting current CloudFront distribution configuration..."
AWS_PROFILE=$PROFILE aws cloudfront get-distribution-config --id $DISTRIBUTION_ID > current-distribution.json

echo "Extracting ETag and distribution config..."
ETAG=$(AWS_PROFILE=$PROFILE aws cloudfront get-distribution-config --id $DISTRIBUTION_ID --query 'ETag' --output text)

echo "Creating updated configuration with /webapp/ origin path..."
# Extract the distribution config and update the origin path
AWS_PROFILE=$PROFILE aws cloudfront get-distribution-config --id $DISTRIBUTION_ID --query 'DistributionConfig' > distribution-config.json

# Update the origin path to /webapp
jq '.Origins.Items[0].OriginPath = "/webapp"' distribution-config.json > updated-distribution-config.json

echo "Updating CloudFront distribution..."
AWS_PROFILE=$PROFILE aws cloudfront update-distribution \
    --id $DISTRIBUTION_ID \
    --distribution-config file://updated-distribution-config.json \
    --if-match $ETAG

echo "CloudFront distribution update initiated!"
echo "Webapp will be available at: https://d2is5arv1ipfdl.cloudfront.net/"
