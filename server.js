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

app.post('/github/deploy', function(req, res) {
  console.log('[server] req.body: ', req.body);
});

app.listen(port);

console.log('[server] listening on port: ', port);
