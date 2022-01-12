console.log("\n");

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    // o resolve é uma função que é chamada quando a promise for atendida
    // e o reject é quando a promise é rejeitada
    setTimeout(() => {
      // aceita apenas um único parâmetro
      if (segundos > 3) resolve(frase);
      else {
        const errorMsg = "Ops! Algo deu errado!!";
        reject(errorMsg);
      }
    }, segundos * 1000);
  });
}

falarDepoisDe(4, "Olá mundo!")
  .then((frase) => frase.concat("!"))
  .then((novaFrase) => console.log(novaFrase))
  .catch((error) => console.log(error));

falarDepoisDe(2, "Olá mundo!")
  .then((frase) => frase.concat("!"))
  .then((novaFrase) => console.log(novaFrase))
  .catch((error) => console.log(error));
