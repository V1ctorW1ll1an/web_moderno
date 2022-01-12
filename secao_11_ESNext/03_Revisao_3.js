const obj = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj));

console.log(Object.entries(obj));

// melhorias
const nome = "Victor";
const pessoa = {
  nome,
  ola() {
    console.log("Olá!!");
  },
};

console.log(pessoa.nome);
pessoa.ola();

// class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return "Au au!";
  }
}

const cachorro = new Cachorro();

console.log(cachorro.falar());
