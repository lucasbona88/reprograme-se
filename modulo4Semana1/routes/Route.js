var express = require('express');
var router = express.Router();


//Lista de cidades
var cidades = ['Mimoso', 'Cachoeiro', 'Serra'];

router.get("/clientes", function(req, res) {
  res.send("Lista de todos os clientes.");
} );
router.get("/", function(req, res) {
  res.send("Seja bem vindo ao nosso sistema.");
} );
router.get("/clientes/:nome/:sobrenome?", function(req, res) {
  res.send("Seja bem vindo <h1>"+ req.params.nome + " " + req.params.sobrenome + "</h1>");
} );


//Aula 3
router.get("/cidades/:id", (req, res) =>{
  let id = req.params.id;
  return res.json([cidades[id]]);
});
router.post("/cidades/cadastrar", (req, res) =>{
  let nome = req.body.nome;
  cidades[(cidades.length)] = nome;
  return res.json([cidades[(cidades.length - 1)]]);
});
router.get("/cidades", (req, res) =>{
  res.render("form");
})

//Aula 4
router.get("/par", function(req, res) {
  let nome = req.query['nome'];
  if(nome){
    res.send("<h1>" + nome + "</h1>");
  }else{
    res.send("Não foi localizado nenhum valor no navegador.");
  }
  res.send("Nome = " + req.query['nome']);
})
module.exports = router;