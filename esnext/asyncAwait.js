const { reject } = require("lodash");

function gerarNumerosEntre(min, max, nProibidos) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (nProibidos.includes(aleatorio)) {
      reject("Número repetido");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdeNumeros) {
  try {
    const numeros = [];
    for (let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    console.error(e);
  }
}

gerarMegaSena(8).then(console.log).catch(console.log);
