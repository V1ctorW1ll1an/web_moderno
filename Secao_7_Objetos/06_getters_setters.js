// Encapsulamento, atributos e métodos privados
// por que precisamos disso?

// um exemplo é uma idade negativa, ou um mes 40, dia 60

// em java nos costumamos encher de get e set
// para o martin fowler isso é uma sacola, com objeto burro cheio de getters e
// setters

const exemplo = {
  _valor: 1, //convenção (colocar o underline na frente)
  get valor() {
    return this._valor;
  },
  // js não aceita sobrecarga de método, porém para esse propósito
  // ele aceita
  set valor(valor) {
    if (valor > this._valor) this._valor = valor;
    else console.log("Só pode inserir valores maiores que os atuais!");
  },
};

exemplo._valor = 10; // não reclama, porém não é aconselhável

console.log(exemplo);

// maneira correta de atribuir
exemplo.valor = 20; // para uma função set, devemos atribuir desta forma
console.log(exemplo);

console.log("valor do exemplo: ", exemplo.valor);

// mostra a mensagem do set
exemplo.valor = 0;
