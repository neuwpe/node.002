var express = require('express');
var app = module.exports = express.createServer();
app.set('title', 'わーわーわー');
app.get('/:id?', function(req, res, next){
	var id = req.params.id;
	res.send('hello world 6'+id? ": id="+id : "" );
});
app.listen(8080);
