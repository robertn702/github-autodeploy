var express = require('express');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var fs = require('fs');

var app = express();

var port = process.env.PORT || 3001;

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log('[server] @GET -> req.body: ', req.body);
  res.send('<h1>HELLO</h1>');
});

app.post('/', function(req, res) {
  console.log('[server] @POST -> req.body: ', req.body);
  res.send('@POST: github deploy');
});


app.listen(port);

console.log('[server] listening on port: ', port);
