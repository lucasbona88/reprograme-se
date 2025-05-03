// Bibliotecas/Modulos Utilizados
const database = require('./db/db');
const express = require('express');
const app = express();
const hand = require("express-handlebars");
//MODELS
const Filme = require("./models/Filme");
const FilmeRoutes = require("./routes/routesFilme");
//CONTROLLERS
const FilmesControllers = require("./controllers/ControllerFilme");
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({extended:true,}))

app.use(express.json());
app.use(express.static("public"));
// Rotas
app.use("/", FilmeRoutes);
// Sincronismo com banco de dados
try{

  database.sync().then(() => {
    app.listen(9443, () => {
      console.log('Servidor Rodando');
    })
    console.log('Banco de Dados Sincronizado com Sucesso!');
  });
}
catch(erro){
  console.log('Erro ao Sincronizar o Banco de Dados', erro)
}