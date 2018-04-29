// server.js
var express = require('express')
var bodyParser = require('body-parser')
var noteRoutes = require('./routes/route');
app = express(),
	port = process.env.PORT || 8080;
//Set the app to list the route
noteRoutes(app)
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);