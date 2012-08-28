var express = require('express');
var app = module.exports = express.createServer();
var io = require('socket.io').listen(app);

app.get('/:id?', function(req, res, next){
	var id = req.params.id;
	res.send('hello world 6'+id? ": id="+id : "" );
});
app.listen(8080);
