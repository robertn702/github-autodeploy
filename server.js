const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const fs = require('fs');
const execFile = require('child_process').execFile;

var app = express();

var port = process.env.PORT || 3001;

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('[server] @GET -> req.body: ', req.body);
  res.send('<h1>HELLO</h1>');
});

app.post('/', (req, res) => {
  const child = execFile('pwd',
    (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
        console.log(`execFile error: ${error}`);
      }
  });
  console.log('[server] @POST -> req.body: ', req.body);
  res.send('@POST: github deploy');
});


app.listen(port);

console.log('[server] listening on port: ', port);
