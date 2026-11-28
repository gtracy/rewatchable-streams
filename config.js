'use strict';

function getLogger() {
    try {
        const pino = require(require.resolve('pino', { paths: [__dirname, process.cwd()] }));
        return pino(module.exports.getLogConfig());
    } catch {
        return null;
    }
}

module.exports = {

    getPort : function getPort() {
        return 3304
    },

    getEnv : function getEnv() {
        if (
            process.env.NODE_ENV === 'prod' ||
            process.env.NODE_ENV === 'production' ||
            Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME)
        ) {
            return 'prod';
        } else {
            return 'dev';
        }
    },

    getLogConfig : function getLogConfig() {
        let level = 'info';
        if( process.env.LOG_LEVEL ) {
            level = process.env.LOG_LEVEL;
        } else if( module.exports.getEnv() === 'dev' ) {
            level = 'debug';
        }

        return({
            level: level,
            autoLogging: false,
            redact: [
                '*.access_secret',
                '*.access_id',
                '*.api_key',
                'err.config.url',
                'err.config.headers.Authorization',
                'err.config.headers.authorization',
                'awsConfig.access_secret',
                'awsConfig.access_id'
            ]
        });
    },

    getAWSConfig : function getAWSConfig(cloud_sqs) {
        if (module.exports.getEnv() === 'prod' || cloud_sqs) {
            return {
                region : process.env.AWS_REGION || 'us-east-2'
            }
        } else {
            return {
                endpoint : 'http://localhost:8000',
            }
        }
    },

    getSQSConfig : function getSQSConfig(queue) {
        const logger = getLogger();
        if (logger) {
            logger.error({ queue }, 'Missing SQS configuration');
        }
        return undefined;
    }

}