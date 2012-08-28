var http = require('http');
//var express = require('express');
http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('<div><input type="text" style="width:500px;" /></div><p>Hello Node Ninja & World 5</p> \n');
}).listen(8080);

