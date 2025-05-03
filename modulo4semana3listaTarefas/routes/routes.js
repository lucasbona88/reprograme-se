// MÓDULOS
const express = require('express');
const router = express.Router();
// Controllers
const usuarioController = require('../controller/usuarioController');
const tarefaController = require('../controller/tarefaController');
// REquisições HTTP PRINCIPAIS
router.get('/', (req, res) =>{
  return res.json({message: "Sistema de Lista de Tarefas"});
});
// Requisições HTTP PARA Usuario
// POST - Cadastrar
router.post('/usuarios/Cadastrar', usuarioController.UsuarioCreate);

// GET - Listar
router.get('/usuarios/:id?', usuarioController.UsuarioListar);

// PUT - Update
router.put('/usuarios/:id', usuarioController.UsuarioUpdate)

// DELETE
router.delete('/usuarios/:id', usuarioController.UsuarioDelete);

//Requisições HTTP PARA Tarefa
// POST - Cadastrar
router.post('/tarefas/Cadastrar', tarefaController.TarefaCreate);
// GET - Listar
router.get('/tarefas/:id?', tarefaController.TarefaListar);
// PUT - Update
router.put('/tarefas/:id', tarefaController.TarefaUpdate);
// DELETE
router.delete('/tarefas/:id', tarefaController.TarefaDelete);

module.exports = router;