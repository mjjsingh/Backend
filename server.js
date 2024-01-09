const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
  res.send('Welcome home');
});

app.get('/about', (req, res) => {
  res.send('Welcome to About Us page');
});

app.get('/node', (req, res) => {
  res.send('Welcome to my Node Js project');
});

app.listen(port);
