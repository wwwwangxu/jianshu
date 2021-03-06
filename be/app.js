const express = require('express');
const path = require('path');
const fs = require('fs')
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../fe/build')));

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });


app.get('/api/headerlist.json', (req, res, next) => {
  // console.log('header req')
  const data = fs.readFileSync('./api/headerlist.json');
  res.send(data);
})

app.get('/api/homelist.json', (req, res, next) => {
  // console.log('homelist req')
  const data = fs.readFileSync('./api/homelist.json');
  res.send(data);
})

app.get('/api/login.json', (req, res, next) => {
  // console.log('login req')
  const data = fs.readFileSync('./api/login.json')
  res.send(data);
})

app.get('/api/morelist.json', (req, res, next) => {
  // console.log('morelist req')
  const data = fs.readFileSync('./api/morelist.json')
  res.send(data);
})

app.get('/api/detail.json', (req, res, next) => {
  // console.log('detail req')
  const data = fs.readFileSync('./api/detail.json')
  res.send(data);
})

app.listen(port, function() {
  console.log('server listening on port ', port)
})