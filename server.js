var express = require('express');
var app = module.exports = express.createServer();
app.get('/', function(req, res){
	res.set('title','テストだす');
	res.send('hello world');
	res.send('<h1>テスト</h1><div><input type="text" style="width:500px;" /></div><p>Hello Node Ninja & World 8</p> \n');
});
app.listen(8080);
