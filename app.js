var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Name = require('./models/student');
//connect to mongoose

mongoose.createConnection('mongodb://localhost:27017/studentStore');
var db = mongoose.connection;

app.get('/', function(req, res){
	// '/' location of homepage and when someone visits this function will run 
	res.send('Hello Server side'); // getting data by send()
});
app.get('/api/name', function(req, res){
	console.log("anshul");
		res.json({
			"name": "anshul"
		});

	Name.getNames(function(err, name){
		console.log(err);
		console.log(name);
		if(err){
			console.log(err); 
			throw err;

		}



	});

});


app.listen(3030);
console.log('Running on port 3030....')
