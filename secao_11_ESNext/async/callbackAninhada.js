// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json

// Sem promises

const http = require("http");

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  http.get(url, (res) => {
    let resultado = "";

    res.on("data", (dados) => {
      resultado += dados;
    });

    res.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

let objAlunos = [];
getTurma("A", (alunos) => {
  alunos.filter((aluno) => objAlunos.push({ turma: "A", nome: aluno.nome }));

  getTurma("B", (alunos) => {
    alunos.filter((aluno) => objAlunos.push({ turma: "B", nome: aluno.nome }));

    getTurma("C", (alunos) => {
      alunos.filter((aluno) =>
        objAlunos.push({ turma: "C", nome: aluno.nome })
      );

      console.log("\n", objAlunos, "\n");
    });
  });
});
