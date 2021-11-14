class Lancamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }
  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    const total = this.lancamentos.reduce(
      (acc, current) => acc.valor + current.valor
    );
    return total;
  }
}

const salario = new Lancamento("Salario", 45000);
const contaDeLuz = new Lancamento("Luz", -220);

const contas = new CicloFinanceiro(6, 2021);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());
