const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
console.log(pilotos); // ["Vettel", "Alonso", "Raikkonen", "Massa"];

// o massa quebrou o carro de novo...!!
//  o método pop remove o ultimo elemento do array
console.log("\nPOP\n");
pilotos.pop();
console.log(pilotos); //[ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ]

// O Verstappen substituiu o massa!!
// o método push adiciona um novo elemento no final do array, ele é
// o contrario do método pop
console.log("\nPUSH\n");
pilotos.push("Verstappen");
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

// shift
// O método shift é parecido com o método pop, a diferença entre eles é
// que o método pop remove o ultimo elemento e o shift remove o primeiro elemento
console.log("\nSHIFT\n");
pilotos.shift();
console.log(pilotos); // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

// unshift
//O método unshift é bem parecido com o push, porém ele adiciona um elemento no inicio
// do array, ele é o oposto do método shift, já que o mesmo remove o primeiro
// elemento do array
console.log("\nUNSHIFT\n");
pilotos.unshift("Hamilton");
console.log(pilotos);

// splice
// splice pode adicionar ou remover elementos dentro do array, a partir de um índice
// adicionar
console.log("\nSPLICE\n");
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// remover
pilotos.splice(3, 1); // vou remover o massa de novo hehehe!!!
console.log("\nTchau masssa\n");
console.log(pilotos); // massa quebrou de novo

// slice
// Important: Este método retorna um novo array
// Pega um novo array a partir do índice informado
console.log("\nSLICE\n");
const novoArray = pilotos.slice(2); // ['Bottas', 'Raikkonen', 'Verstappen' ]
console.log("Array antigo: ", pilotos); // permanece o mesmo
console.log("Novo array: ", novoArray); // novo array alterado

// slice significa cortar o array em pedaços
// o primeiro elemento é o índice, este índice esta incluído no novo array
// gerado, ou seja, no exemplo a seguir temos um novo array, do índice 1
//  (incluindo ele próprio) até o índice 4 (o índice 4 não é incluído)
const algunsPilotos = pilotos.slice(1, 4);
console.log("Alguns pilotos: ", algunsPilotos); // [ 'Alonso', 'Bottas', 'Raikkonen' ]
