const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const fs = require('fs');
const childProcess = require('child_process');
const execFile = childProcess.execFile;
const exec = childProcess.exec;

const ROOT_PATH = `/var/www`;
const PRE_BUILD_PATH = './pre_build.sh';

var app = express();

var port = process.env.PORT || 3001;

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function logWrapper(childProcess) {
  childProcess.stdout.on('data', (data) => {
    console.log('stdout: ' + data);
  });

  childProcess.stderr.on('data', (data) => {
    console.log('stdout: ' + data);
  });

  childProcess.on('close', (code) => {
    console.log('closing code: ' + code);
  });
}

app.post('/', (req, res) => {
  console.log('[server] PUSHED TO GITHUB');
  if (!req.body || !req.body.repository) return;
  const repoName = req.body.repository.name;
  const repoPath = `${ROOT_PATH}/${repoName}`;
  const buildPath = `${repoPath}/build.sh`;

  logWrapper(execFile('bash', ['./pre_build.sh', repoPath]));
  logWrapper(execFile('bash', [buildPath]));
});


app.listen(port);

console.log('[server] listening on port: ', port);
