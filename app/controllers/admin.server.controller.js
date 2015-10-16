var User = require('mongoose').model('User');

exports.render = function (req, res) {
	res.render('admin',{
		title:	"Admin"
	})
};

exports.list = function(req, res, next){
	User.find({}, function(err, users){
		if (err) {
			return next(err);
		}else{
			res.json(users);
		}
	});
};
