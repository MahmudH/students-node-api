var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var students = require('./routes/student.js')(app);

app.get('/', function(req, res){
	res.send('Hello World');
	// res.json({hello: 'world'});
});

var server = app.listen(3000, function(){
	console.log('Server running at http://127.0.0.1:3000/');
});


