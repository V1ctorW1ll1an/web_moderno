// aponta para um endereço de memoria #123ff
const pessoa = { nome: "João" };

// não mudei a referencia do objeto pessoa,
// mudei o dado na referencia nome
pessoa.nome = "Joaquim";

// Agora sim estamos modificando dentro do endereço
// #123ff e isso da um erro
// pessoa = { nome: "victor" };

// congelar o objeto pessoa,
// uma vez que o objeto está congelado, você não consegue mais modificar
// nada dentro do objeto
Object.freeze(pessoa);

pessoa.nome = "Pedro";
console.log(pessoa); // nome ainda é Joaquim

// não adiciona nenhum novo atributo
pessoa.endereco = "rua abc";

console.log(pessoa);
