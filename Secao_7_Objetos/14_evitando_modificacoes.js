// Evitando modificações

// Object.preventExtensions, não pode add mais atributos

const produto = Object.preventExtensions({
  nome: "Caneta",
  preco: 1.99,
  tag: "promoção",
});

console.log("Extensível? ", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca"; // não surte efeito
delete produto.tag;
console.log(produto);

produto.tag = "perecível"; // não tem como add mais esse atributo
console.log(produto);

// Object.seal
const pessoa = {
  nome: "Juliana",
  idade: 35,
};
// não conseguimos mais add novos atributos, não conseguimos mais
// excluir os atributos, só conseguimos mudar o valor deles
Object.seal(pessoa);

console.log("Selado", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva"; // não posso
delete pessoa.nome; // não posso
pessoa.idade = 34; // conseguimos

console.log(pessoa);
