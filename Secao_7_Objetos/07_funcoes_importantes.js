const pessoa = {
  nome: "Victor",
  idade: 22,
  peso: 65,
};

// pega todas as chaves do objeto
console.log(Object.keys(pessoa));

// pega todos os valores
console.log(Object.values(pessoa));

// pegar o conjunto dos dois
console.log(Object.entries(pessoa));

console.log("\npessoas \n");
// percorrer os valores do obj
Object.entries(pessoa).forEach((p) => {
  console.log(p);
});

console.log("\n");

// chave e valor
Object.entries(pessoa).forEach(([key, value]) => {
  console.log(key, ":", value);
});

// somente as chaves ou valores desta forma também funciona
Object.entries(pessoa).forEach(([key, value]) => {
  console.log(value);
});

// você pode definir algumas caraterísticas de uma propriedade

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: false, // é listavel?
  writable: false, // modificavel?
  value: "10/11/1111",
});

console.log(pessoa.dataNascimento);

// tentando modificar
pessoa.dataNascimento = "10/10/1010";
console.log(pessoa.dataNascimento); // não modificou

console.log(Object.keys(pessoa)); // vai aparecer se enumerable for true

console.log("\n assign \n");

// Object.assign (ECMAScript 2015)
const destino = { a: 1 };
const primeiro = { b: 2 };
const segundo = { c: 3, a: 4 };

console.log(destino);

// Pega todos os objetos que passamos depois do primeiro parâmetro
// e atribui ao primeiro parâmetro, primeiro objeto ou objeto de destino
const obj6 = Object.assign(destino, primeiro, segundo);
// repare que o attr a já existia, então ele simplesmente substituiu seu valor
console.log(destino);

obj6.c = 20;
console.log(obj6);

Object.freeze(obj6);
obj6.c = 30;
console.log("Não modifica: ", obj6);
