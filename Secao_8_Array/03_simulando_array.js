const quaseArray = { 0: "Victor", 1: "Bia", 2: "Joaquim" };
console.log(quaseArray);
console.log(typeof quaseArray);

// adiciona uma nova propriedade a um objeto
// o toString será uma função, que imprime os valores do objeto, no caso
// o objeto atual que é o this
Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this);
  },
  enumerable: false,
});

// provando que o array é objeto, criando um pseudo-array

const meuArray = ["Victor", "Bia", "Joaquim"];
console.log(
  "\nquase array: ",
  quaseArray.toString(),
  "\nMeu array: ",
  meuArray
);
