var epr = require('express');
var http = require('http');

/*
http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('<h1>テスト</h1><div><input type="text" style="width:500px;" /></div><p>Hello Node Ninja & World 8</p> \n');
}).listen(8080);
*/

epr.get('/', function(req, res){
  res.send('hello world');
});
epr.listen(3000);
