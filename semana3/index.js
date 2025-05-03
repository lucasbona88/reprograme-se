// importando bibliotecas e arquivos
const database = require('./db');
const Cliente = require('./models/cliente');

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
  res.send('Bem vindo ao cadastro de clientes.');
});

app.get('/cliente', (req, res)=>{
  res.render('formCliente');
})
app.post('/addcliente', (req, res)=>{
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone
  }).then(()=>{
    res.send('Cliente cadastrado com sucesso!');
  }).catch((error)=>{
    res.send('Erro ao cadastrar o cliente!');
  })
})


app.listen(porta, () => {
  console.log('Servidor rodando na porta ' + porta)
});


(async()=> {

  try{
    const resultado = await Cliente.sync();
    console.log(resultado);
    const clientes = await Cliente.findAll();
    console.log("Lista de Cliente \n", clientes);
  }catch(error){
    console.log(error);
  }
})
();