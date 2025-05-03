const express = require('express');
const app = express();
const porta = 443;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html')
})

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/home.html')
})

app.get('/p1', (req, res) => {
  res.sendFile(__dirname + '/p1.html')
})

app.get('/p2', (req, res) => {
  res.sendFile(__dirname + '/p2.html')
})

app.get('/p3', (req, res) => {
  res.sendFile(__dirname + '/p3.html')
})

app.listen(porta, () =>{
  console.log('Servidor rodando')
})