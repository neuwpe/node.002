var http = require('http');
var express = require('./node_modules/express');
http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('<div><input type="text" style="width:500px;" /></div><p>Hello Node Ninja & World 7</p> \n');
}).listen(8080);

