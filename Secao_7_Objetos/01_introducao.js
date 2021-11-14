// No país javascript, os objetos são os vice presidentes

// antes da programação procedural, tínhamos a programação "goto"
// rudimentos de estruturas de controles e desvio de fluxo com "goto"
// código não estruturado

// depois do goto, veio os paradigma estruturados,
// entre eles temos o paradigma procedural
// é baseado na função ou no procedimento, com funções

// foco: Função que manipula dados
procedimento(dado);

// OO
// Dado que tem valores e funções que manipulam esses valores
// objeto === dado
objeto = {
  valor1,
  valor2,

  comportamento1() {
    // ...
  },
  comportamento2() {
    // ...
  },
};

// Para a OO, o mundo é feito de objetos, esses objetos tem atributos (características)
// e métodos (ações), e esses objetos relacionam entre si, (um objeto pode ter outro objeto)
// um objeto pode herdar características de outro objeto

// A OO mapeia o mundo real e cria uma abstração dentro do mundo dos dados

// #INFO

// princípios // pilares

// @Abstração: Pegar um objeto do mundo real, e traduzi - lo para dentro do seu sistema
// exemplo o carro: tem varias características, ligar, desligar, ligarSom, tem cor, tem placa...
// Digamos que eu seja um funcionário do detram, faz sentido eu ter relação com a
// ação de acelerar? ou um motor? para um sistema do detram...
// precisamos de coisas tipo a placa, dados do dono do carro
// dentro de uma oficina a placa pode não ser tão importante, porém os dados do
// motor por exemplo, já entra no nosso sistema

// @Encapsulamento: Detalhes da implementação escondidos
// mostrar uma interface simples para que a pessoa consiga usar nosso sistema
// quando falo de interface, é de programador para programador
// por exemplo, um controle remoto, o teclado do computador, o mouse

// @Herança: (js: prototype) "é um", "um fusca 'é um carro'", é diferente de "tem um", por exemplo
// "um carro 'tem um' motor"
// na herança você receber características dos objetos pais
// por exemplo, eu recebi olhos pretos do meu pai, e cabelo castanho da minha mãe

// @Polimorfismo: Podemos substituir coisa concretas por coisas mais abstratas, por exemplo
// um carro pode ser um uno, e ter as mesmas característica que um gol, por exemplo ambos
// aceleram, ambos possuem 4 rodas, ambos são azuis, e essas características torna o carro
// um objeto que poder ser mapeado tanto pra gol quanto pra uno, ou seja, dentro de um objeto do
// tipo carro, nõs podemos ter tanto um gol quanto um uno.
