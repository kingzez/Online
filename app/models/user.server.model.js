var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	sex: String,
	home: String,
	birth: String,
	college: String,
	classes: String,
	stuNum: String,
	tel: String,
	qq: String,
	desire: String,
	reason: String,
	//password: String,
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('User' , UserSchema);