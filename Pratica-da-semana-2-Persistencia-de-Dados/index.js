//ATENÇÃO NÃO ESQUEÇA DE INSTALAR AS BIBLIOTECAS SQLITE3 E SEQUELIZE
//comando de instalação

// npm install sqlite3 sequelize

// Importando as biliotecas
const { Sequelize, Model, DataTypes } = require("sequelize");
//Abrindo conexão com o Banco de dados ou criando um novo caso não exista
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite"
});
// Definindo a classe setor
class Setor extends Model {
  static init(sequelize) {
    super.init({
      idsetor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      ramal: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(30)
      }
    }, { sequelize, modelname: 'setor', tableName: 'setores' })
  }
}
// Inicialização do modelo create table setor
Setor.init(sequelize);
// Definindo a classe funcionario
class Funcionario extends Model {
  static init(sequelize) {
    super.init({
      matricula: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idsetor: {
        type: DataTypes.INTEGER,
        references: {
          model: Setor,
          key: 'idsetor'
        },
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      nascimento: {
        type: DataTypes.DATE
      },
      telefone: {
        type: DataTypes.STRING(15)
      }
    }, { sequelize, modelname: 'funcionario', tableName: 'funcionarios' })
  }

}
// Inicialização do modelo create table funcionario
Funcionario.init(sequelize);

// sincronismo
(async () => {
  await sequelize.sync({ force: true });
  // Usando o CREATE
  const setor_create_f = await Setor.create({ nome: "Financeiro", ramal: "2134", email: "financeiro@empresa.com" });
  const setor_create_s = await Setor.create({ nome: "Secretaria", ramal: "2135", email: "secretaria@empresa.com" });
  const setor_create_P = await Setor.create({ nome: "Portaria", ramal: "2136", email: "portaria@empresa.com" });


  // READ - Listar objetos
  const setores_listar = await Setor.findAll();

  console.log("Lista de setores: \n", JSON.stringify(setores_listar, null, 2), "\n\n");

  //Adicionando mais 3 setores

  const setor_create_c = await Setor.create({ nome: "Contabilidade", ramal: "2137", email: "contabilidade@empresa.com" });
  const setor_create_d = await Setor.create({ nome: "Diretoria", ramal: "2138", email: "diretoria@empresa.com" });
  const setor_create_r = await Setor.create({ nome: "Recursos Humanos", ramal: "2139", email: "rh@empresa.com" });
  
  // READ - Listar objetos
  const setores_listar_2 = await Setor.findAll();
  console.log("Lista de setores com mais 3: \n", JSON.stringify(setores_listar_2, null, 2), "\n\n");

  //excluindo setor de Contabilidade, pois empresa nenhuma precisa disso...
  const setor_delete = await Setor.findByPk(4);
  setor_delete.destroy();
  
  // READ - Listar objetos
  const setores_listar_3 = await Setor.findAll();
  console.log("Lista de setores deletando o setor de Contabilidade, pois a empresa não precisa mais disso: \n", JSON.stringify(setores_listar_3, null, 2), "\n\n");

  //alterando o nome do setor Recursos Humanos para Departamento Pessoal
  const setor_update = await Setor.findByPk(6);
  setor_update.nome = "Departamento Pessoal";
  const result = await setor_update.save();


  // READ - Listar objetos
  const setores_listar_4 = await Setor.findAll();
  console.log("Lista de setores após alteração de Recursos Humanos para Departamento Pessoal: \n", JSON.stringify(setores_listar_4, null, 2), "\n\n");
  

  
})();