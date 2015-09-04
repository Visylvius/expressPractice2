// 'use strict';
var express = require('express');
var app = express();
var posts = require('./mock/posts.json');
app.get('/', function(req, res) {
  res.send('<h1>hello this dog</h1>');
});
app.get('/blog', function(req, res) {

});
app.listen(3000, function() {
  console.log('The frontend server is running on port 3000');
});
