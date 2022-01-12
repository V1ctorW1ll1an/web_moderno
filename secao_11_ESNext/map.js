// nova estrutura do js, com chaves variadas e dinâmicas

const tecnologias = new Map();

tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.react); // undefined
console.log(tecnologias.get("react").framework);

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

chavesVariadas.forEach((value, key) => {
  console.log(value, key);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
