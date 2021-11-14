const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "IPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de vidro", preco: 12.49, fragil: true },
  { nome: "Copo de plástico", preco: 18.99, fragil: false },
];

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

let result = produtos.filter(somenteOsFrageis);
console.log(result);

result = produtos.filter(somenteProdutosCaros);
console.log(result);
