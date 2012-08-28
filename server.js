var express = require('express');
var http = require('http');
var app = module.exports = express.createServer();
app.get('/', function(req, res){
	res.send('<h1>hello world 3</h1>');
});
app.listen(8080);
