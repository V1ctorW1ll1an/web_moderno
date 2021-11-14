console.log(typeof Array, typeof new Array(), typeof []);

// Estrutura indexada

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];

// indexada a partir do zero [0]
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined

aprovados[3] = "Paulo";
aprovados.push("Victor");

console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados);

console.log(aprovados[8] === undefined);
console.log(aprovados[8] === null);

// Sort, altera o array original e reordena os elementos do array
aprovados.sort();
console.log("depois do sort:\n", aprovados);

// exclui um elemento, mas, o array não sofre uma reordenação
delete aprovados[1];
console.log("depois do delete:\n", aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados);

// splice, add elemento no array,
// remove elemento do array, e pode executar as duas coisas juntas
// splice(índice_do_array, numero_de_elementos_a_excluir,add1, add2, add3)
// é importante observar que ele remove e add a partir do índice especificado
aprovados.splice(0, 1, ...["João", "Maria", "José"]);
console.log("depois do splice:\n", aprovados);

console.log("\n add elementos \n");
aprovados.splice(0, 0, "elemento1", "elemento2");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log("\ntrocando todo o array\n");
console.log(aprovados);

aprovados.splice(0, aprovados.length, ...["Joaquim", "Sarah", "Willian"]);
console.log("\ndepois do splice de substituição:\n\n", aprovados);
