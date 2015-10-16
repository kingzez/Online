var User = require('mongoose').model('User');

exports.render = function(req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}

	req.session.lastVisit = new Date();

	res.render('user', {
		title: "Online registration system",
		head_title: "Online Registration"
	})
};	

exports.create = function(req, res, next){
	var user = new User(req.body);
	user.save(function(err){
		if (err) {
			return next(err);
		}else {
			res.redirect('/users');
			//res.json(user);
		}
	});
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

exports.read = function(req, res){
	res.json(req.user);
};

exports.userByID =function(req, res, next, id){
	User.findOne({
		_id: id
	},function(err,user){
		if (err) {
			return next(err);
		}else{
			req.user = user;
			next();
		}
	});
};

exports.update = function(req, res, next){
	User.findByIdAndUpdate(req.user.id, req.body, function(err, user){
		if (err) {
			return next(err);
		}else{
			res.json(user);
		}
	});
};

exports.delete = function(req, res, next){
	req.user.remove(function(err){
		if (err) {
			return next(err);
		}else{
			res.json(req.user);
		}
	});
};