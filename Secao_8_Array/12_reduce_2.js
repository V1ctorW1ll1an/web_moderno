const alunos = [
  { nome: "João", nota: 7.3, bolsista: true },
  { nome: "Maria", nota: 9.2, bolsista: false },
  { nome: "Joaquim", nota: 9.8, bolsista: false },
  { nome: "Mariana", nota: 8.7, bolsista: false },
];

//  desafio 1 : verificar se todos os alunos sao bolsistas
//  desafio 2 : Alguns aluno é bolsista

// desafio 1
const todosSaoBolsistas = (result, bolsista) => result && bolsista;

const todosBolsistas = alunos
  .map((aluno) => aluno.bolsista)
  .reduce(todosSaoBolsistas);

console.log(todosBolsistas);

// desafio 2
const algumBolsista = (result, bolsista) => result || bolsista;

const algum = alunos.map((aluno) => aluno.bolsista).reduce(algumBolsista);

console.log(algum);
