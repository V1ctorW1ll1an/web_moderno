const numbers = [1, 2, 3, 4, 5];

console.log(numbers);
// For com propósito, nao modifica o array atual
// Internamente tem um for, e faz uma transformação dos elementos para outro
//  array do mesmo tamanho

// retorna o dobro de cada elemento
let results = numbers.map(function (element) {
  return element * 2;
});

console.log(results);
console.log(numbers);

// functions

// somar 10 ao elemento atual
const sum10 = (element) => element + 10;
const triple = (element) => element * 3;
const toMoney = (element) =>
  `R$ ${parseFloat(element).toFixed(2).replace(".", ",")}`;

// encadeamento dos maps
results = numbers.map(sum10).map(triple).map(toMoney);
console.log(results);
