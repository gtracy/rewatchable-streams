#!/bin/bash

# Deploy Lambda function for rewatchable streams refresh job
# Make sure you have AWS CLI configured with appropriate credentials
#
# Unlike www_job, this package requires shared code outside its own directory
# (../../utils/streams.js and ../../config.js), so the deployment package is
# staged as a repo-root-relative tree and the handler is addressed as
# packages/streams_refresh/app-lambda.handler.
#
# .env.json is intentionally NOT packaged: on Lambda the API key and table
# names come from the function configuration (see lambda-config.json).
# MOVIE_OF_THE_NIGHT_API_KEY is a secret — set it in the Lambda console or
# via `aws lambda update-function-configuration`, never commit it.
#
# Scheduling (hourly refresh): the EventBridge rule is NOT created by this
# script. After the first deploy, create it once with:
#   aws events put-rule --name rewatchable-streams-refresh-hourly \
#       --schedule-expression "rate(1 hour)" --profile rewatchables-runner
#   aws events put-targets --rule rewatchable-streams-refresh-hourly \
#       --targets "Id=1,Arn=<lambda-arn>" --profile rewatchables-runner
#   aws lambda add-permission --function-name rewatchable-streams-streams-refresh \
#       --statement-id AllowEventBridgeHourly --action lambda:InvokeFunction \
#       --principal events.amazonaws.com \
#       --source-arn <rule-arn> --profile rewatchables-runner

FUNCTION_NAME="rewatchable-streams-streams-refresh"
ZIP_FILE="function.zip"
PROFILE="rewatchables-runner"
STAGE_DIR="deploy-stage"

echo "Building Lambda function..."

# Stage a repo-root-relative tree so ../../utils and ../../config resolve
rm -rf "$STAGE_DIR"
mkdir -p "$STAGE_DIR/packages/streams_refresh" "$STAGE_DIR/utils"
cp app.js app-lambda.js app-local.js package.json "$STAGE_DIR/packages/streams_refresh/"
cp ../../utils/streams.js "$STAGE_DIR/utils/"
cp ../../config.js "$STAGE_DIR/"

# Install production dependencies for the package
cd "$STAGE_DIR/packages/streams_refresh"
npm install --production

# utils/streams.js resolves its own requires (streaming-availability,
# dotenv-json, pino, @aws-sdk/*) upward from utils/, so mirror the installed
# modules at the stage root as well
cp -r node_modules "$STAGE_DIR/node_modules"
cd "$STAGE_DIR"

# Create deployment package (exclude tests and dev artifacts)
echo "Creating deployment package..."
zip -r "../$ZIP_FILE" . -x "*.git*" "*.DS_Store*" "test/*" "*.md" "deploy.sh"
cd ..

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
        --runtime nodejs20.x \
        --role arn:aws:iam::315817266687:role/lambda-execution-role \
        --handler packages/streams_refresh/app-lambda.handler \
        --zip-file fileb://$ZIP_FILE \
        --description "Refreshes streaming availability for the oldest movies in the catalog (hourly batch)" \
        --timeout 300 \
        --memory-size 512 \
        --environment Variables='{
            "DYNAMO_MOVIE_STREAMS_TABLE": "movie_streams",
            "STREAM_REFRESH_LIMIT": "5",
            "STREAM_REFRESH_PACING_MS": "500"
        }' \
        --tags Project=rewatchable-streams,Environment=production,Purpose=data-refresh
fi

# Clean up
rm -rf "$STAGE_DIR" "$ZIP_FILE"

echo "Deployment complete!"
echo "Function name: $FUNCTION_NAME"
echo "To test: AWS_PROFILE=$PROFILE aws lambda invoke --function-name $FUNCTION_NAME response.json"
echo "Note: set MOVIE_OF_THE_NIGHT_API_KEY in the function configuration before invoking."
