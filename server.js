var express = require('express');
var app = module.exports = express.createServer();
app.get('/', function(req, res){
	res.send('hello world 4');
	res.set('title', 'わーわーわー');
});
app.listen(8080);
