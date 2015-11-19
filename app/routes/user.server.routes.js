var users = require('../../app/controllers/user.server.controller');

module.exports = function(app){
	//我的写法只不过是把依赖都挂载到app对象上面注入到各个组件中
	//var users = app.Controller.get('users')
	//var aFormatter = app.Util.get('formatter')
	//var aValidator = app.Util.get('validator')
	//app.get('/somepath', users.render.bind(users, req, res, next, aFormatter, aValidator ...))
	//第一个好处是controllers下面的所有文件 我可以通过fs一次加载到Controller对象上面提供接口
	//第二个好处是用的时候不用每次都require()一个带各种相对路径的文件
	app.route('/')
		.get(users.render)		
		.post(users.create);
	app.route('/users')
		.get(users.list);
	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete);

	app.param('userId', users.userByID);
};
