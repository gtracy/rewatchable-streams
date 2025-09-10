'use strict'

const app = require('./app');
exports.handler = async (event, context) => await app.handler(event, context);
