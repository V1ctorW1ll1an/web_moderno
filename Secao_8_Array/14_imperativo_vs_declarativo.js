const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Joaquim", nota: 9.8, bolsista: false },
  { nome: "Mariana", nota: 8.7, bolsista: true },
];

// imperativo
total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}

console.log(total1 / alunos.length);

// declarativo
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
const media = total2 / alunos.length;

console.log(media);

// o imperativo explica e detalha cada passo a passo de como deve ser feito
// todo o processo para obter o resultado
// no declarativo o importante é o que deve ser feito, informando apenas o
// critério, e a lógica é feita de forma separada.

// o declarativo nao se importa em como vai ser feito, ele so fala o que
// ele quer que seja feito
// select nome, email from cliente where client.id = 1 //declarativo
