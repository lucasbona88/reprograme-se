// Bibliotecas/Modulos Utilizados
const Sequelize = require('sequelize');
// Criando a configuração do Banco de Dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './filmes.sqlite'
})
// Tratando possíveis erros e autenticando no Banco de Dados
try{
  sequelize.authenticate();
  console.log('Banco de Dados Conectado com Sucesso!');
}
catch(erro){
  console.log('Erro ao Conectar ao Banco de Dados', erro);
}
// Exportando o Objeto Sequelize para ser utilizado em outros arquivos
module.exports = sequelize;