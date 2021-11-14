// usando a notação literal
const obj1 = {};
console.log(obj1);

// Object em JS
const obj2 = new Object();

// funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome; // público
  let _desc = desc; // privado
  let _preco = preco; // privado

  // função privada
  function showDesconto() {
    console.log(_desc, "Centavos");
  }

  // função pública
  this.getPreco = function () {
    console.log("Desconto Deeeee....!!!!");
    showDesconto();
    return _preco * (1 - _desc);
  };
}

const produto = new Produto("Caneta", 2.0, 0.1); // 10%

console.log(produto.nome);
console.log(produto._desc); // undefined
console.log(produto._preco); // undefined
console.log("Preço: ", produto.getPreco());

// Função factory

function criarFunctionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFunctionario("João", 7980, 4);
const f2 = criarFunctionario("Maria", 11400, 1);

console.log(
  "Salário da João: ",
  f1.getSalario(),
  "\nSalário da Maria: ",
  f2.getSalario(0)
);

// Object.create

const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// de um Json
const fromJson = JSON.parse('{"info": "Sou um Json"}');
console.log(fromJson);
