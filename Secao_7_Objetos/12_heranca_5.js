console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

/**
 * inverte a ordem de uma string
 * @returns string
 */
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("rotciv".reverse());
console.log("victor".reverse());

Array.prototype.first = function () {
  return this[0];
};

console.log([5, 2, 3, 4].first());
console.log(["a", "b", "c"].first());

// sobrescrever o comportamento de uma função que já existe
// não faça isso, é só para mostrar o poder da flexibilidade
// do javascript
String.prototype.toString = function () {
  return "lascou tudo";
};

// Olha o efeito colateral aqui
console.log("victor".reverse()); // reverteu a string errada
