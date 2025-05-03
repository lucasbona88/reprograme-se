const http = require('http');
const porta = 443;
const fs = require('fs');
const servidor = http.createServer((req, res) => {
  fs.readFile('pagina.html', (err, arquivo) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(arquivo);
    return res.end()
  });
})

servidor.listen(porta, () => {
  console.log('Servidor rodando')
})

async function readFileByLine(file) {
  const fileStream = fs.createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    console.log(line);
  }
}

readFileByLine('texte.txt')