const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/", Services.LivroListar);

router.post("/login", Services.FuncionarioLogin);
router.get("/login", (req, res) => {
  res.render("funcionario/login");
});

router.get("/funcionario/Cadastrar", (req, res) => {
  res.render("funcionario/Cadastrar");
});
router.get("/logado", (req, res) => {
  res.render("logado");
});
router.get("/mensagem", (req, res) => {
  res.render("mensagem");
});
router.post("/funcionario/Cadastrar", Services.FuncionarioCreate);

router.get("/livros/Cadastrar", (req, res) => {
  res.render("livros/Cadastrar");
});
router.post("/livros/Cadastrar", Services.LivroCreate);

router.get("/livros/listar", Services.LivroListar);

//rotas para os cookies
router.get("/carrinho/Adicionar/:id/:nome", Services.CarrinhoAdicionar);
router.get("/carrinho/listar", Services.CarrinhoListar);
router.get("/carrinho/remover/:item", Services.CarrinhoRemoverItem);

module.exports = router;
