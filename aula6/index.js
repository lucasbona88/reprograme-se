const express = require('express');
const app = express();
const porta = 443;

app.get('/', (req, res) => {
  res.json('Bem vindo ao servidor Web Utilizando Express!')
  
})

app.listen(porta, () => {
  console.log('Servidor rodando!')
})