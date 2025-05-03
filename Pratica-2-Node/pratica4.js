const fs = require('fs');

const rawData = fs.readFileSync('dados_pessoas.json');
const data = JSON.parse(rawData);
  //USE O MÉTODO JSON.PARSE PARA CONVERTER OS DADOS DO ARQUIVO JSON
console.log(data);