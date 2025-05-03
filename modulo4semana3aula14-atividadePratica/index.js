const express = require('express');
const app = express();

var cookie = require('cookie-parser');
app.use(cookie());

let user1 = {
  nome: "Carla",
  apelido: "Carlinha",
  idade: "18",
  cidade: "Vitória"
}
let user2 = {
  nome: "Carlos",
  apelido: "Carlão",
  idade: "20",
  cidade: "Vila Velha"
}
let user3 = {
  nome: "Antônio",
  apelido: "Tonho",
  idade: "23",
  cidade: "Cariacica"
}

app.get('/adicionarCookie', (req, res) =>{
  res.cookie("usuarioDados", {user1, user2, user3}, {expire: 400000 + Date.now()});
  res.send('Dados do usuário adicionado com sucesso!');
});
app.get('/mostrarCookies', (req, res) =>{
  
  res.send(req.cookies);
});

app.get('/', (req, res) => {
  res.send('Seja bem Vindo ao teste de cookies.');
});

app.get('/logout',(req,res)=>{
  res.clearCookie("usuarioDados");
  res.send('Usuário desconectado com sucesso!');
})

app.listen(3000);