// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json

// Sem promises

const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (error) {
          reject(error);
        }
      });
    });
  });
};

let objAlunos = [];
// getTurma("A").then((alunos) => {
//   alunos.map((aluno) => objAlunos.push({ turma: "A", nome: aluno.nome }));

//   getTurma("B").then((alunos) => {
//     alunos.map((aluno) => objAlunos.push({ turma: "B", nome: aluno.nome }));

//     getTurma("C").then((alunos) => {
//       alunos.map((aluno) =>
//         objAlunos.push({ turma: "C", nome: aluno.nome })
//       );

//       console.log("\n", objAlunos, "\n");
//     });
//   });
// });

// passa varias promises para a função all e quando todas as promises forem
// resolvidas, vai começar a chamar o método then
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes))
  .catch((e) => console.log(e.message));

// getTurma("D").catch((e) => console.log(e.message));
