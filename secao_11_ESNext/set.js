// Não aceita repetição e não é indexada

const times = new Set();

times.add("vasco").add("Flamengo").add("Palmeiras").add("São paulo");

console.log(times);
times.add("vasco");
console.log(times);

console.log(times.size);
console.log(times.has("Vasco"));
console.log(times.has("vasco"));

times.delete("Palmeiras");
console.log(times);

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
console.log(nomes);
// removendo repetições

const nomesSet = new Set(nomes);
console.log(nomesSet);
