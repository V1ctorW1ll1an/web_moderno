// for in, itera em index
// for of, itera em valores

for (let letra of "Cod3r") {
  console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];

console.log("\n");

for (let i in assuntosEcma) {
  console.log(i);
}

console.log("\n");

for (let assunto of assuntosEcma) {
  console.log(assunto);
}

console.log("\n");

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (let assuntoMap of assuntosMap) {
  console.log(assuntoMap);
}

console.log("\n");

for (let key of assuntosMap.keys()) {
  console.log(key);
}

console.log("\n");

for (let value of assuntosMap.values()) {
  console.log(value);
}

console.log("\n");

for (let [key, value] of assuntosMap.entries()) {
  console.log(key, value);
}

console.log("\n");

const s = new Set(["a", "b", "c"]);

for (let letra of s) {
  console.log(letra);
}

console.log("\n");

const obj = {
  name: "victor",
  age: 22,
};

for (let o of Object.values(obj)) {
  console.log(o);
}

console.log("\n");
