const escola = [
  {
    nome: "turma m1",
    alunos: [
      {
        nome: "João",
        nota: 8.1,
      },
      {
        nome: "Maria",
        nota: 9.3,
      },
    ],
  },
  {
    turma: "turma m2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9,
      },
      {
        nome: "Roberto",
        nota: 7.3,
      },
    ],
  },
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);

console.log(notas1);

// O que eu quero??
// Eu quero um único array, com todas as notas, de todas as turmas
const todasNotas = escola.flatMap(getNotasDaTurma);
console.log(todasNotas);
