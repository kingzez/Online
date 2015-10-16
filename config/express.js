var config = require('./config');
	express = require('express');
	morgan = require('morgan');	//提供简单的日志中间件
	compress = require('compression');	//提供响应内容的压缩功能
	bodyParser = require('body-parser'); //几个处理请求数据的中间件
	methodOverride = require('method-override'); //提供可对HTTP DELETE PUT 两个遗留方法的支持
	session = require('express-session');
	//mongoose = require('mongoose');

module.exports = function(){
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE.ENV === 'production') {
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	app.set('views', './app/views');
	app.set('view engine', 'ejs');


	//require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/user.server.routes.js')(app);
	require('../app/routes/admin.server.routes.js')(app);

	app.use(express.static('./public'));

	return app;
};