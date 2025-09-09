#!/bin/bash

# Deploy Lambda function for rewatchable streams data generation
# Make sure you have AWS CLI configured with appropriate credentials

FUNCTION_NAME="rewatchable-streams-www-job"
ZIP_FILE="function.zip"
PROFILE="rewatchables-runner"

echo "Building Lambda function..."

# Install dependencies
npm install --production

# Create deployment package
echo "Creating deployment package..."
zip -r $ZIP_FILE . -x "*.git*" "*.DS_Store*" "test/*" "*.md" "deploy.sh"

# Check if function exists
echo "Checking if Lambda function exists..."
if AWS_PROFILE=$PROFILE aws lambda get-function --function-name $FUNCTION_NAME >/dev/null 2>&1; then
    echo "Updating existing Lambda function..."
    AWS_PROFILE=$PROFILE aws lambda update-function-code \
        --function-name $FUNCTION_NAME \
        --zip-file fileb://$ZIP_FILE
else
    echo "Creating new Lambda function..."
    AWS_PROFILE=$PROFILE aws lambda create-function \
        --function-name $FUNCTION_NAME \
        --runtime nodejs18.x \
        --role arn:aws:iam::315817266687:role/lambda-execution-role \
        --handler index.handler \
        --zip-file fileb://$ZIP_FILE \
        --description "Generates JSON data for rewatchable streams website" \
        --timeout 300 \
        --memory-size 512 \
        --environment Variables='{
            "PODCAST_MOVIES_TABLE": "podcast_movies",
            "MOVIE_STREAMS_TABLE": "movie_streams", 
            "S3_BUCKET": "rewatchable-streams-webapp-1757203168",
            "S3_KEY": "data.json"
        }' \
        --tags Project=rewatchable-streams,Environment=production,Purpose=data-generation
fi

# Clean up
rm $ZIP_FILE

echo "Deployment complete!"
echo "Function name: $FUNCTION_NAME"
echo "To test: AWS_PROFILE=$PROFILE aws lambda invoke --function-name $FUNCTION_NAME response.json"
