// concatena dois arrays

const filhas = ["Ualeskah", "Cibalena"];
const filhos = ["Uoxiton", "Uescley"];

let todos = filhas.concat(filhos);

console.log(todos);
console.log(filhas);
console.log(filhos);

todos = filhas.concat(filhos, "Lhuansk");
console.log(todos);

const numbers = [].concat([1, 2], [3, 4], 5, [[6, 7]]);
console.log(numbers);
