const express = require('express')
const rotas = express.Router()
const porta = 443
const app = express()

// tive que colocar o conteúdo do arquivo rotas dentro deste para poder funcionar, acho que é bug do replit

let municipios = [
  { cidade: "vitoria", info: "Vitória: Capital do ES" },
  { cidade: "vilavelha", info: "Vila Velha: Canela Verde" },
  { cidade: "cachoeiro", info: "Cachoeiro de Itapemirim: Princesa do Sul" },
  { cidade: "colatina", info: "Colatina: Princesa do Norte" }
]

rotas.get("/", (req, res) => {
  res.json({ Olá: "Seja bem vindo!" })
})

rotas.get("/:cidadeid", (req, res) => {
  const cidade = req.params.cidadeid
  const cidadeinfo = municipios.find((i) => i.cidade == cidade)
  if (!cidadeinfo) {
    res.status(404).json({ erro: "Cidade não encontrada", cidadepesquisada: cidade })
  } else {
    res.status(200).json(cidadeinfo)
  }
})
// final do arquivo rotas.js

app.use('/', rotas)

app.listen(porta, () => {console.log('Servidor rodando')})