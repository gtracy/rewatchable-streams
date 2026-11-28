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
        if( process.env.NODE_ENV === 'prod' ) {
            return process.env.NODE_ENV;
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
            autoLogging: false
        });
    },

    getAWSConfig : function getAWSConfig(cloud_sqs) {
        if( process.env.NODE_ENV === 'prod' || cloud_sqs ) {
            return {
                region : process.env.AWS_REGION,
                access_id : process.env.AWS_ACCESS_ID,
                access_secret : process.env.AWS_ACCESS_SECRET
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