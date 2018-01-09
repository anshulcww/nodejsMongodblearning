var http = require('http');
var dt = require('./myfirstmodule');
var fs = require('fs');
var mongo = require('mongodb');
//creating a web server
http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data){
    	res.writeHead(200, {'Content-Type': 'text/html'});// method is the status code, 200 means that all is OK
	    res.write(data);
	    res.end();	
	   });
	}).listen(8080);


