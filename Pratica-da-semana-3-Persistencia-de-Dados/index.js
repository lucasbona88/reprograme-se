// importando bibliotecas e arquivos
const database = require('./db');
const Fornecedor = require('./models/fornecedor');

/// criando o servidor
const express = require('express');
const app = express();
const porta = 9443;
const bodyParser = require('body-parser');
// setar os valores da view engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
// definindo rotas
app.get('/', (req, res) =>{
  res.send('Bem vindo ao cadastro de fornecedores.');
});

app.get('/fornecedor', (req, res)=>{
  res.render('formFornecedor');
})
app.post('/addfornecedor', (req, res)=>{
  Fornecedor.create({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone
  }).then(()=>{
    res.send('Fornecedor cadastrado com sucesso!');
  }).catch((error)=>{
    res.send('Erro ao cadastrar o fornecedor!');
  })
})


app.listen(porta, () => {
  console.log('Servidor rodando na porta ' + porta)
});


(async()=> {

  try{
    const resultado = await Fornecedor.sync();
    console.log(resultado);
    const fornecedores = await Fornecedor.findAll();
    console.log("Lista de Fornecedor \n", fornecedores);
  }catch(error){
    console.log(error);
  }
})
();