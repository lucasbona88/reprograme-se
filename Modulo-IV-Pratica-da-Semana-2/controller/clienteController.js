const Cliente = require('../model/clienteModel');
module.exports = class funcionarioController{
  // CREATE
  static async ClienteCreate(req, res){
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let email = req.body.email;
    let telefone = req.body.telefone;
    const cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email
    }
    await Cliente.create(cliente);
    res.json({message: "Cliente cadastrado com sucesso!"});
  }
  // READ - LISTAR
  static async ClienteListar(req, res){
    const id = req.params.id;
    if(id){
      const cliente = await Cliente.findOne({where: {id: id}});
      res.json(cliente);
    }else {const cliente = await Cliente.findAll({raw:true});
         res.json(cliente);
         }

  }

  //UPDATE
  static async ClienteUpdate(req, res){
    const id = req.params.id;
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let email = req.body.email;
    let telefone = req.body.telefone;
    const cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email
    };
    await Cliente.update(cliente, { where: { id:id }})
    res.json({message: "Cadastro atualizado com sucesso! Foram atualizados as seguintes informações: ", dados: cliente})
  }
  // DELETE
  static async ClienteDelete(req, res){
    const id = req.params.id;
    await Cliente.destroy({ where: { id: id }});
    res.json({message: "Cliente excluído com sucesso!"});
  }
}