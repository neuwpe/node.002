var express = require('express');
var http = require('http');
var app = module.exports = express.createServer();
app.get('/', function(req, res){
	res.send('hello world 2');
});
app.listen(8080);
