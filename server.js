var express = require('express');
var http = require('http');
//TEST
var app = module.exports = express.createServer();
app.get('/', function(req, res){
	res.send('hello world');
});
app.listen(8080);
