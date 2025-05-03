const axios = require("axios");
const endBack =
  "https://da34fa65-a288-4010-ad6c-c57d9b7cc8fe-00-2go9kjl13xwoe.kirk.replit.dev";
module.exports = class Services {
  //VERIFICAR USUÁRIO
  static async FuncionarioLogin(req, res) {
    let valores = req.body;
    const options = {
      url: endBack + "/login",
      method: "POST",
      data: valores,
    };
    axios(options)
      .then((funcionario) => {
      if (response.data) {
        return res.render("/logado");
      }
    })
    .catch((error)=>{
      return res.render("/mensagem", {erro: error});
    })
  }
  //Create funcionario
  static async FuncionarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: endBack + "/add_funcionario",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //Create livro
  static async LivroCreate(req, res) {
    let valores = req.body;
    const options = {
      url: endBack + "/add_livros",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
  //LISTAR
  static async LivroListar(req, res) {
    const options = {
      url: endBack + "/livros",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const livro = response.data;
      res.render("livros/listar", { livro });
    });
  }
  //COOKIES
  static async CarrinhoAdicionar(req, res) {
    const Item = {
      id: req.params.id,
      nome: req.params.nome,
    };
    // Verificando se já existe um cookie para o carrinho
    if (req.cookies.carrinho) {
      // Se já existe, adiciona o novo item
      const carrinho = JSON.parse(req.cookies.carrinho);
      carrinho.push(Item);
      res.cookie("carrinho", JSON.stringify(carrinho), {
        maxAge: 900000,
        httpOnly: true,
      });
    } else {
      // Se não existe, cria um novo carrinho com o item
      const carrinho = [Item];
      res.cookie("carrinho", JSON.stringify(carrinho), {
        maxAge: 900000,
        httpOnly: true,
      });
    }
    res.send("Item adicionado ao carrinho");
  }

  // Rota para remover um item do carrinho
  static async CarrinhoRemoverItem(req, res) {
    const itemDeletar = req.params.item;
    // Verificando se existe um cookie para o carrinho
    if (req.cookies.carrinho) {
      // Obtendo o carrinho atual do cookie
      let carrinho = JSON.parse(req.cookies.carrinho);
      // Removendo o item do carrinho, se existir
      carrinho = carrinho.filter((item) => item.id !== itemDeletar);
      // Atualizando o cookie com o carrinho modificado
      res.cookie("carrinho", JSON.stringify(carrinho), {
        maxAge: 900000,
        httpOnly: true,
      });
      res.send("Item removido do carrinho");
    } else {
      res.send("Carrinho vazio");
    }
  }
  static async CarrinhoListar(req, res) {
    // Rota para exibir o carrinho
    if (req.cookies.carrinho) {
      const carrinho = JSON.parse(req.cookies.carrinho);
      res.render("carrinhos/Listar", { carrinho });
    } else {
      res.send("Carrinho vazio");
    }
  }
};
