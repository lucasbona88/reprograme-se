const http = require("http");
const fs = require("fs");
const porta = 443;
const formidavel = require("formidable");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url == "/enviodearquivo") {
    const form = new formidavel.IncomingForm();
    form.parse(req, (err, campos, arquivos) => {
      const urlAntiga = arquivos.filetoupload[0].filepath;
      const urlNova = "./uploads/" + arquivos.filetoupload[0].originalFilename;
      var rawData = fs.readFileSync(urlAntiga);
      fs.writeFile(urlNova, rawData, (err) => {
        if (err) console.log(err);
        res.write("Envio realizado!");
        res.end();
      });
    });
  }
  function listarArquivos(diretorio, arquivos) {
    if (!arquivos) arquivos = ["sem arquivos"];
    let listagemArquivos = fs.readdirSync(diretorio);
    console.log(listagemArquivos);
  }
  listarArquivos("./uploads");
});
server.listen(porta, () => {
  console.log("Servidor rodando");
});
