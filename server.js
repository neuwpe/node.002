var express = require('express');
var app = module.exports = express.createServer();


app.get('/', function(req, res){
	res.send('<h1>テストだすよ</h1>\n<p>hello world</p>');
});
app.listen(8080);
