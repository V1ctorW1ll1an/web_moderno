// se vai juntar é rest
// se vai espalhar é spread

const funcionario = { nome: "Victor", salario: 12345.99 };
const clone = { ativo: true, ...funcionario };

console.log(clone);

// Não gera impacto no funcionario
console.log(funcionario);

// usar spread com array
const n1 = [1, 2, 3, 4];
const n2 = [5, 6, 7, 8];

const n3 = [...n1, ...n2];
console.log(n3);
