// importar as bibliotecas que iremos utilizar
const {Sequelize, Model, DataTypes} = require('sequelize');

// abrindo conexão com banco
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'empresa.sqlite'
});

(async () => {
 //sincronismo
 await sequelize.sync({force: true});
})();