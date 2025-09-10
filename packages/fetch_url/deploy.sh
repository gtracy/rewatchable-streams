#!/bin/bash

# Deploy fetch_url Lambda function
# Uses rewatchables-runner profile for deployment

FUNCTION_NAME="rewatchable-streams-fetch-url"
PROFILE="rewatchables-runner"
REGION="us-east-2"

echo "Installing dependencies..."
npm install

echo "Creating deployment package..."
zip -r function.zip . -x "*.git*" "node_modules/.cache/*" "*.DS_Store"

echo "Deploying Lambda function..."
AWS_PROFILE=$PROFILE aws lambda update-function-code \
    --function-name $FUNCTION_NAME \
    --zip-file fileb://function.zip \
    --region $REGION

if [ $? -eq 0 ]; then
    echo "✅ Lambda function deployed successfully!"
    echo "Function: $FUNCTION_NAME"
    echo "Region: $REGION"
else
    echo "❌ Deployment failed!"
    exit 1
fi

echo "Cleaning up..."
rm function.zip

echo "Deployment complete!"
