// let, var e const
{
  var a = 2;
  let b = 3;
  const c = 4;

  console.log(b); // Só é visível dentro deste  contexto
  console.log(c); // Só é visível dentro deste contexto
}

console.log(a);
// console.log(b); // error
// console.log(c); //error

const produto = "ipad";
// aceita quebra de linha
console.log(`${produto}`);

// destructuring
const str = "string qualquer";
const [primeiraLetra, segundaLetra, ...restoDasLetras] = str;

console.log(primeiraLetra);
console.log(segundaLetra);
console.log(restoDasLetras);

let [x, y] = [1, 2];
console.log("x: ", x, "y: ", y);

// trocar o valor de duas variáveis
[y, x] = [x, y];
console.log("x: ", x, "y: ", y);

// desestruturar um obj
// i é um alias para o atributo
const { idade: i, nome } = { nome: "victor", idade: 22 };

console.log("idade: ", i, "nome: ", nome);
