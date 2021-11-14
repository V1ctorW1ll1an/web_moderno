// Implementando o método map

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// 4 linhas
const toObject = (product) => JSON.parse(product);
const justPrice = (product) => product.preco;
const result = carrinho.myMap(toObject).myMap(justPrice);
console.log(result);
