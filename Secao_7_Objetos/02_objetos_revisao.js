let pessoa = new Object();

console.log(pessoa);

pessoa = {};
console.log(pessoa);

pessoa = {
  nome: "Victor",
  idade: 22,
};

console.log(pessoa);

// Como acessar um dado do meu objeto

// existem duas formas

// 1° com a notação de ponto (.)
console.log(pessoa.nome);

// 2° com notações de colchetes
console.log(pessoa["nome"]);

// undefined, pois um objeto não é uma estrutura indexada
console.log(pessoa[0]);

// Objetos também são flexíveis
// podemos atribuir novos elementos
// (atributos ou métodos) para o nosso objeto
// dinamicamente

pessoa.corDosOlhos = "azul";

console.log(pessoa);

// deletando o atributo
delete pessoa.nome;
console.log(pessoa);

// objetos compostos
// carro:  {
//   modelo: 'A4',
//   valor: 90000,
//   proprietario: {
//     nome: 'joao',
//     idade: 26,
//     endereco: { logradouro: 'rua abc', numero: 192 }
//   }
// }

console.log("\n Objetos compostos \n");

endereco = {
  logradouro: "rua abc",
  numero: 192,
};

pessoa = {
  nome: "joao",
  idade: 26,
  endereco: endereco,
};

carro = {
  modelo: "A4",
  valor: 90000,
  proprietario: pessoa,
};

console.log("\nendereco: ", endereco);
console.log("\npessoa: ", pessoa);
console.log("\ncarro: ", carro);

console.log("\n", carro.proprietario.endereco.logradouro, "\n");
console.log("\n", carro["proprietario"]["endereco"]["numero"]);

delete carro.proprietario;
console.log(carro);

// problema
// Acessar objetos que não existem

// const proprietario = carro.proprietario.nome; // erro

// primeira solução, validar através de um if
let proprietario = "";
if (carro && carro.proprietario) {
  proprietario = carro.proprietario.nome;
  console.log(proprietario);
} else {
  console.log("\nCarro sem proprietario!\n");
}

// segunda solução é utilizar o optional chaining Operator (?.)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

const getProprietario = (carro) => carro?.proprietario;
const getProprietarioNome = (proprietario) => proprietario?.nome;

proprietario = getProprietario(carro);
let nome = getProprietarioNome(proprietario);

if (nome) console.log(nome);
else console.log("\nCarro sem proprietario!\n");

carro.proprietario = {
  nome: "joao",
  idade: 26,
  endereco: { logradouro: "rua abc", numero: 192 },
};

proprietario = getProprietario(carro);
nome = getProprietarioNome(proprietario);

if (nome) console.log(nome);
else console.log("\nCarro sem proprietario!\n");
