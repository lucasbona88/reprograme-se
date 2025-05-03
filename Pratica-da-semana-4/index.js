const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
let ejs = require('ejs');

const app = express();
const porta = 443;

app.use(session({ secret: '1234567890' }))

app.use(bodyParser.urlencoded({ extended: true }))

var login = 'admin';
var senha = '1234';
const mensagem = '';

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, './'))

app.get('/', (req, res) =>{
  if(req.session.login){
    res.render('logado')
    console.log('Usuário logado: ' + req.session.login)
  }
  else{
    res.render('home')
  }
})

app.get('/logado', (req, res) =>{
  res.render('logado')
  
})

app.get('/email', (req, res) =>{
  res.render('email')
  
})

app.post('/', (req, res) =>{
  if(req.body.login == login && req.body.password == senha){
    req.session.login = login
    res.render('logado')
  }
  else{
    res.render('home')
  }
})

app.post('/email', async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "834b3d482d6361",
      pass: "4804a2f07be7a6"
    }
  })
  var message = {
    from: "bona4me@gmail.com",
    to: "concursoifes@ifes.com.br",
    subject: "Mensagem da atividade prática Semana 4",
    text: "Texto da mensagem da atividade prática realizada na Semana 4",
    html: "<h1>Título da mensagem</h1><p>Texto da mensagem da atividade prática realizada na Semana 4</p>",
  }
  transport.sendMail(message, (err) => {
    if (err)
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: E-mail não enviado!'
      })
    else
      return res.json({
        erro:false,
        mensagem: 'E-mail enviado com sucesso!'
      })
  })
})

app.listen(porta, () =>{
  console.log('Servidor rodando na porta: ' + porta)
})