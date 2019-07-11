const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

console.log('starting server');
const app = express();

app.use("/", express.static(path.join(__dirname, '../dist')));
const router = require('./router.js');
app.use(bodyParser.json({type: '*/*'}));

router(app);

const port = 3333;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:',port);