const express = require('express');
const app = express();
const database = require('./db/db');
const routes = require('./routes/routes');

//MODELS
const Usuario = require('./model/usuarioModel');
const Tarefa = require('./model/tarefaModel');
//Codificação JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Rota Principal
app.use('/', routes);
try {
  database.sync().then(()=> {
    
  })
}
catch(erro){
  console.log("Houve um erro ao sincronizar com o banco de dados. ", erro);
};
app.listen(3000);