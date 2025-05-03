// BIBLIOTECAS
const Sequelize = require('sequelize');
//CRIANDO A CONFIGURAÇÂO DO BANCO DE DADOS
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mercado.sqlite'
})
//TRATANDO POSSÍVEIS ERROS E AUTENTICANDO
try{
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
}
catch (erro){
  console.log("Erro ao conectar ao banco de dados", erro);
}
module.exports = sequelize;