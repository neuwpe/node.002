var express = require('express');
var app = module.exports = express.createServer();
//var io = require('socket.io');

app.get('/:id?', function(req, res, next){
	var id = req.params.id;
	res.send('hello world 10');
});
app.listen(8080);
