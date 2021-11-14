// prototype chain
Object.prototype.atributo_extra = "atributo extra"; // Não faça isso
// em casa

const avo = { atributo: "atributo do avo" };
const pai = { __proto__: avo, atributo2: "atributo do pai" };
const filho = { __proto__: pai, atributo3: "atributo do filho" };

// filho -> pai -> avo -> Object.prototype
console.log(avo.__proto__ === Object.prototype); // true
console.log(pai.__proto__ === Object.prototype); //false
console.log(filho.__proto__ === Object.prototype); // false
console.log(pai.__proto__ === avo.__proto__); // false
console.log(filho.__proto__ === pai.__proto__); // false

// não são iguais, apenas falam para o js que é uma cadeia de prototypes
// e que é para ele vasculhar essa cadeia

console.log(filho.atributo); // será que o filho possui essa propriedade?
console.log(filho.atributo2);
console.log(filho.atributo3);

console.log(filho.atributo_extra);

const carro = {
  velaAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velaAtual + delta <= this.velMax) {
      this.velaAtual;
    } else {
      this.velaAtual = this.velMax;
    }
  },
  status() {
    return `${this.velaAtual} Km/h de ${this.velMax} Km/h`;
  },
};

const ferrari = {
  modelo: "f40",
  velMax: 324, // shadowing
};

const volvo = {
  modelo: "v40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

// seta o prototype entre dois objetos, a ferrari tem como prototipo
// o carro
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
