/*!
 * online - server.js
 */
process.env.NODE_ENV = process.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express');

var db = mongoose();
var app = express();
app.listen(3000);
module.export = app;

console.log('Server running at http://localhost:3000');