var mongoose = require('mongoose');

//student schema

var nameSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});
// this student obj can be accessible from anywhere else {module.exports}
var Name = module.exports = mongoose.model('Name' , nameSchema);

// get students

module.exports.getNames = function(callback, limit){
	Name.find(function(err, res){
		console.log(err);
		console.log(res);
	console.log("student");
		
	}).limit(limit);
}