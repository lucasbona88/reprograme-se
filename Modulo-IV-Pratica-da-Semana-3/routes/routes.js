const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/",(req, res) =>{
 res.send("Seja bem Vindo ao nosso sistema de Tarefas.");
})
// -------------TAREFAS ----------------
router.get("/tarefas/cadastrar",(req, res) =>{
 res.render("tarefas/cadastrar");
})

//ROTA PARA SERVIÇO DE CREATE
router.post("/tarefas/Create",Services.TarefaCreate);

//ROTA PARA O SERVIÇO LISTAR
router.get("/tarefas/listar",Services.TarefaListar);

router.post("/tarefas/Update",Services.TarefaUpdate);
// ROTA PARA O FORMILÁRIO DE ATUALIZAÇÃO
router.get("/tarefas/Atualizar/:id_tarefa",(req,res)=>{
  let tarefas ={
    id_tarefa: req.params.id_tarefa,
    titulo: req.params.titulo,
    descricao: req.params.descricao
  }
  res.render("tarefas/update",{tarefas});
})

//ROTA PARA O SERVIÇO DE DELETE
router.post("/tarefas/Delete",Services.TarefaDelete);

// -------------USUÁRIOS ----------------
router.get("/usuarios/cadastrar",(req, res) =>{
 res.render("usuarios/cadastrar");
})

//ROTA PARA SERVIÇO DE CREATE
router.post("/usuarios/Create",Services.UsuarioCreate);

//ROTA PARA O SERVIÇO LISTAR
router.get("/usuarios/listar",Services.UsuarioListar);

router.post("/usuarios/Update",Services.UsuarioUpdate);
// ROTA PARA O FORMILÁRIO DE ATUALIZAÇÃO
router.get("/usuarios/Atualizar/:id_usuario",(req,res)=>{
  let usuarios ={
    id_usuario: req.params.id_tarefa,
    nome: req.params.nome,
    email: req.params.email,
    senha: req.params.senha
  }
  res.render("usuarios/update",{usuarios});
})

//ROTA PARA O SERVIÇO DE DELETE
router.post("/usuarios/Delete",Services.UsuarioDelete);

module.exports=router;
