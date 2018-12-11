const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const StringRoutes = require('./function')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:mystring', StringRoutes);

app.get('/', function(req, res) {
	res.send('Hello! The API is running');
});

module.exports = app;