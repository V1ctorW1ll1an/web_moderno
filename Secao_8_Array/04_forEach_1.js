console.log("\n");
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// Percorrendo o array
// função anónima
aprovados.forEach(function (nome, index) {
  console.log(`${index + 1}) ${nome}`);
});

console.log("\n");

// Com arrow function
aprovados.forEach((nome) => console.log(nome));

console.log("\n");

// Colocando função dentro de uma constante ou variável
const exibirAprovados = function (nome, index, array, naoExiste) {
  console.log(`${index + 1}) ${nome}`);
  console.log("Próprio array: ", array);
  console.log(
    "O quarto elemento não existe, logo ele é undefine => ",
    naoExiste
  );
  console.log("\n");
};

aprovados.forEach(exibirAprovados);
