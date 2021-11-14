function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até Breve", 456);
console.log(aula1, aula2);

// simulando o new

function novo(fn, ...params) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, "Olá novamente", 8910);
const aula4 = novo(Aula, "Fuii", 111213);

console.log(aula3);
console.log(aula4);
