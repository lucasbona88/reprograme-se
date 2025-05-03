const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const porta = 443;

app.get('/', (req, res) => {
  res.send('Enviando e-mail com o Nodemailer!');
})

app.get('/sendemail', async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "834b3d482d6361",
      pass: "4804a2f07be7a6"
    }
  })
  var message = {
    from: "sender@server.com",
    to: "bona4me@gmail.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
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

app.listen(porta, () => {
  console.log('Servidor rodando!');
})