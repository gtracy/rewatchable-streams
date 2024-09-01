'use strict'

const app = require('./app');

// for easier testing, you can simulate cron inputs on the command line
//    > node app.local.js 
//
const args = process.argv.slice(2);
app.handler(args[0]);