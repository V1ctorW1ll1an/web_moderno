// Exercício: implementar o próprio foreach
console.log("\n");
function meuForeach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function exibirDadosDoArray(elemento, index, array) {
  console.log(`${index + 1}: ${elemento}`);
}

const meuArray = [
  "Flamengo",
  "Atlético de Madrid",
  "Real Madrid",
  "Bayern de Munique",
  "Borussia Dortmund",
  "Barcelona",
  "Liverpool",
];

meuForeach(meuArray, exibirDadosDoArray);

// ainda posso fazer essa função ser builtin do próprio objeto Array
Array.prototype.meuPrototypeForeach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

console.log("\nDentro do prototype do próprio array:\n");

meuArray.meuPrototypeForeach(exibirDadosDoArray);

// Quebra de linha
console.log("\n");
