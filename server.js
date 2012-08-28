var express = require('express');
var app = module.exports = express.createServer();
app.get('/', function(req, res){
	res.send('hello world 4');
});
app.set('title', 'My Site');
app.get('title');
app.listen(8080);
