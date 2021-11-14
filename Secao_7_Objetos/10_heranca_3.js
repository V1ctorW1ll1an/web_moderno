const pai = {
  nome: "João",
  corCabelo: "preto",
};

// cria um objeto novo, tendo como prototype como obj pai
const filha1 = Object.create(pai);

filha1.nome = "Ana";

// herda a cor do cabelo do pai
console.log(filha1.nome, "tem o cabelo", filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: "Maria", writable: false, enumerable: true },
  // corCabelo: { value: "castanho", writable: false, enumerable: true },
});

console.log(filha2);

for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança: ${key}`);
}
