const axios = require("axios");
const endBack =
  "https://864a8267-381d-4139-88f1-197a6c6ff54e-00-2mc9x309iqzdc.kirk.replit.dev";
module.exports = class Services {
  //VERIFICAR USUÁRIO
  static async UsuarioLogin(req, res) {
    let valores = req.body;
    const options = {
      url: endBack + "/login",
      method: "POST",
      data: valores,
    };
    axios(options).then((usuario) => {
      if (usuario != undefined) {
        return res.render("logado");
      }
    });
  }
  //Create usuário
  static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: endBack + "/add_usuario",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //Create produto
  static async ProdutoCreate(req, res) {
    let valores = req.body;
    const options = {
      url: endBack + "/add_produtos",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
  //LISTAR
  static async ProdutoListar(req, res) {
    const options = {
      url: endBack + "/produtos",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const produto = response.data;
      res.render("produtos/listar", { produto });
    });
  }
};
