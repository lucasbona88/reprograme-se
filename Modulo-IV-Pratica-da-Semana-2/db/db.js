// BIBLIOTECA DE CONEXÃO COM O BANCO DE DADOS
const Sequelize = require('sequelize');
// CONEXÃO COM O BANCO DE DADOS
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mercado.sqlite'
})
// TRATANDO ERROS
try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
}
catch (erro){
  console.log("Erro ao conectar ao banco de dados", erro);
}
module.exports = sequelize;