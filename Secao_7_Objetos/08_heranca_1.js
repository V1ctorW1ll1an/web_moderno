// a herança procura dentro do objeto, se não encontrar ele procura
// dentro dos protótipos

const ferrari = {
  modelo: "f40",
  velMax: 324,
};

const volvo = {
  modelo: "v40",
  velMax: 200,
};

// [[Prototype]] != prototype

// Acessa o prototipo do objeto
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype); // true
console.log(volvo.__proto__ === Object.prototype); // true
// tanto o __proto__ de volvo quanto o de ferrari aponto para o mesmo
// prototype Object.prototype
console.log(volvo.__proto__ === ferrari.__proto__);

// o Object.prototype é o ultimo
// prototipo dos objetos
console.log(Object.prototype.__proto__);

// toda função tem esse atributo prototype
console.log(Object.prototype.__proto__ === null);

function meuObjeto() {}

console.log(typeof Object, typeof meuObjeto);

console.log(Object.prototype, meuObjeto.prototype);
// o atributo prototype das funções são diferentes
console.log(Object.prototype === meuObjeto.__proto__);

// o objeto nao tem o atributo prototype
console.log(ferrari.prototype);
