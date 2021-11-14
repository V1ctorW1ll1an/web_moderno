function MeuObjeto() {}

console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

// Todos os objetos criados a partir de uma mesma função construtora
// apontam para o mesmo prototype
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! meu nome é ${this.nome}`);
};

obj1.falar();

obj2.nome = "Rafael";
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;

obj3.nome = "victor";
obj3.falar();

// Resumindo
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
// esse atributo existe, porem não aponta para lugar nenhum
console.log(Object.prototype.__proto__);
