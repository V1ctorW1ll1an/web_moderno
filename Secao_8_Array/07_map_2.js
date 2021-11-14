// desafio

// retornar usando o método map, apenas os preços dos produtos

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// 4 linhas
const toObject = (product) => JSON.parse(product);
const justPrice = (product) => product.preco;
const result = carrinho.map(toObject).map(justPrice);
console.log(result);
