// Transforma um array, usando um acumulador e o elemento atual

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Joaquim", nota: 9.8, bolsista: false },
  { nome: "Mariana", nota: 8.7, bolsista: true },
];

const fnSomaNotas = function (acumulador, valorAtual) {
  console.log(acumulador, valorAtual);
  return acumulador + valorAtual;
};

const valorInicial = 0;

const result = alunos
  .map((aluno) => aluno.nota)
  .reduce(fnSomaNotas, valorInicial);

console.log("Total: ", result);
