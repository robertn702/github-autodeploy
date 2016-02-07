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

app.post('/', (req, res) => {
  // pwd is /var/www/github-autodeploy
  console.log('[server] PUSHED TO GITHUB');
  // console.log('[server] req.body: ', req.body);
  if (!req.body || !req.body.repository) return;
  const repoName = req.body.repository.name;
  const buildPath = `/var/www/${repoName}/build.sh`;
  console.log('[server] repoName: ', repoName);

  const child = execFile('bash', [`/var/www/${repoName}/build.sh`]);

  child.stdout.on('data', (data) => {
    console.log('stdout: ' + data);
  });

  child.stderr.on('data', (data) => {
    console.log('stdout: ' + data);
  });

  child.on('close', (code) => {
    console.log('closing code: ' + code);
  });
});


app.listen(port);

console.log('[server] listening on port: ', port);
