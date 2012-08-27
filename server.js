var http = require('http');
http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('<div><input type="text" style="width:500px;" /></div><p>Hello Node Ninja & World 4</p> \n');
}).listen(8080);

