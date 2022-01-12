// arrow functions

// para escrever funções simples que vão ser encadeadas
const soma = (a, b) => a + b;

console.log(soma(2, 3));

// arrow function (this)
// o this aponta para onde a função foi criada/escrita, sempre
// função abaixo escrita dentro do module do node
const lexico1 = () => console.log(this === exports);

lexico1();

const lexico2 = lexico1.bind({});
lexico2();

// uma função convencional em js pode mudar o seu this,
// dependendo de onde vc chama ela, ou se voce usar um call, apply ou
// fazer um bind

// parâmetro default
function log(text = "Node") {
  console.log(text);
}

log();
log("Node é sensacional!!");

// operador rest
// spread

const total = (...n) => n.reduce((acc, current) => acc + current);

let resultado = total(10, 20, 30, 40, 50);

console.log(resultado);

const foo = [1, "c", 3, "d"];

const myFormat = (n) => `R$ ${parseFloat(n).toFixed(2)}`;
const numbers = (n) => !isNaN(n);
const toMoney = (n) => myFormat(n);

resultado = foo.filter(numbers).map(toMoney);

console.log(resultado);

// ---------------
// encapsulados
const joinNames = (arr) => arr.reduce((acc, current) => `${acc} ${current}`);

const zip = (...rows) => [...rows[0]].map((_, c) => rows.map((row) => row[c]));

/**
 * Recebe dois arrays, um array de nome e sobrenome
 * e retorna um outro array com o join do nome e do sobrenome
 * exemplo:
 *  nomes = ["victor", "joão"];
 *  sobrenomes = ["willian", "sousa"];
 *  return ['victor willian', 'joão sousa']
 * @param {*} nomes : Array
 * @param {*} sobrenomes  : Array
 * @returns Array
 */
const getFullName = (nomes, sobrenomes) =>
  zip(nomes, sobrenomes).map(joinNames);
// --------------

// utilização
const nomes = ["victor", "joão"];
const sobrenomes = ["willian", "sousa"];

const fullNames = getFullName(nomes, sobrenomes);
// resultado
// ['victor willian', 'joão sousa']
console.log(fullNames);
