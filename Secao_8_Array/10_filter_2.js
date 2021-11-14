//  desafio

// Implementar o próprio método filter

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "IPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de vidro", preco: 12.49, fragil: true },
  { nome: "Copo de plástico", preco: 18.99, fragil: false },
];

// meu filtro
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

const somenteOsFrageis = function (product) {
  // Aplicar a lógica para aplicar verdadeiro ou falso
  // diferente do map, que é o array final é do mesmo tamanho que o array
  // inicial, no filter, o array final pode variar o seu tamanho de acordo com
  // a lógica que vai ser implementada
  // return product.fragil === true;
  return product.fragil;
};

const somenteProdutosCaros = function (product) {
  return product.preco >= 500;
};

let result = produtos.myFilter(somenteOsFrageis);
console.log(result);

result = produtos.myFilter(somenteProdutosCaros);
console.log(result);
