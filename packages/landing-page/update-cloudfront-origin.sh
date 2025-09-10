#!/bin/bash

# Update CloudFront distribution origin to point to rewatchables bucket with /webapp/ path

DISTRIBUTION_ID="E7U2S8GNRUT2S"
PROFILE="rewatchables-runner"

echo "Getting current CloudFront distribution configuration..."
AWS_PROFILE=$PROFILE aws cloudfront get-distribution-config --id $DISTRIBUTION_ID > current-distribution.json

echo "Extracting ETag..."
ETAG=$(AWS_PROFILE=$PROFILE aws cloudfront get-distribution-config --id $DISTRIBUTION_ID --query 'ETag' --output text)

echo "Creating updated configuration..."
# Get the current config and update the origin
AWS_PROFILE=$PROFILE aws cloudfront get-distribution-config --id $DISTRIBUTION_ID --query 'DistributionConfig' > distribution-config.json

# Update the origin domain and path
jq '.Origins.Items[0].DomainName = "rewatchables.s3.amazonaws.com" | .Origins.Items[0].OriginPath = "/webapp" | .Origins.Items[0].Id = "S3-rewatchables"' distribution-config.json > updated-distribution-config.json

echo "Updating CloudFront distribution..."
AWS_PROFILE=$PROFILE aws cloudfront update-distribution \
    --id $DISTRIBUTION_ID \
    --distribution-config file://updated-distribution-config.json \
    --if-match $ETAG

echo "CloudFront distribution update initiated!"
echo "Webapp will be available at: https://d2is5arv1ipfdl.cloudfront.net/"
