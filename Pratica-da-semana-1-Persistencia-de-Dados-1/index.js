const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('escola.sqlite', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Conectado ao banco de dados Escola com sucesso!');
  db.run("CREATE TABLE aluno (matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(40))");
});

db.run("INSERT INTO aluno(matricula, nome, email, cidade) values (1, 'Mariana', 'marizinha33@gmail.com', 'Aracruz')");
db.run("INSERT INTO aluno(matricula, nome, email, cidade) values (2, 'Roberto', 'betoloko@hotmail.com', 'Fundão')");
db.run("INSERT INTO aluno(matricula, nome, email, cidade) values (3, 'Wesley', 'soualey@gmail.com', 'Serra')");

db.each("select matricula, nome from aluno", (err, row) => {
  if (err) {
    console.error(err.message);
  }
  console.log(row.matricula + "\t" + row.nome);
})