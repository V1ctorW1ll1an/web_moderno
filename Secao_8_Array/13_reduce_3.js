Array.prototype.myReduce = function (callback, valorInicial) {
  let acumulador = valorInicial || this[0];
  let i = valorInicial ? 0 : 1;
  for (i; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const soma = (total, valor) => total + valor;

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.myReduce(soma, 9));
