var express = require('express');
var router = express.Router();

//Lista de estados
var estados = ['Espírito Santo', 'Paraná', 'São Paulo'];

//Estados
router.get("/estados/:id", (req, res) =>{
  let id = req.params.id;
  return res.json([estados[id]]);
});
router.post('/estados/cadastrar', (req, res) => {
 let nome = req.body.nome;
 estados[(estados.length)] = nome;
 return res.json([estados[(estados.length - 1)]]);
});
router.get("/cadastrar", (req, res) =>{
  res.render("form");
})


router.get("/lista", (req, res) =>{
  return res.json({estados: estados});
})
module.exports = router;