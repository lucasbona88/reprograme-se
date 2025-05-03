//BIBLIOTECAS/MODULOS
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const database = require('./db/db');
const Cliente = require('./model/clienteModel');
const clienteController = require('./controller/clienteController');
const Funcionario = require('./model/funcionarioModel');
const funcionarioController = require('./controller/funcionarioController');
//SINCRONISMO COM O BANCO DE DADOS
try {
  database.sync().then(() => {
  })
}
catch(erro){
  console.log("Houve um erro ao sincronizar com o banco de dados", erro);
};

app.get('/', (req, res) => {
  return res.json({message: "Seja Bem vindo a nossa API!"})
})
//CLIENTE
// POST - CADASTRAR
app.post('/ClientesCadastrar', clienteController.ClienteCreate);
// GET - LISTAR
app.get('/Clientes/:id?', clienteController.ClienteListar);
// PUT - ATUALIZAR
app.put('/Clientes/:id', clienteController.ClienteUpdate);
// DELETE
app.delete( '/Clientes/:id', clienteController.ClienteDelete);
//FUNCIONÁRIO
// POST - CADASTRAR
app.post('/FuncionariosCadastrar', funcionarioController.FuncionarioCreate);
// GET - LISTAR
app.get('/Funcionarios/:id?', funcionarioController.FuncionarioListar);
// PUT - ATUALIZAR
app.put('/Funcionarios/:id', funcionarioController.FuncionarioUpdate);
// DELETE
app.delete( '/Funcionarios/:id', funcionarioController.FuncionarioDelete);

app.listen(3000);