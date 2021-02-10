//gerar um número entre 2 números
function gerarNumerosEntre(min, max) {
  if (min > max) {
    let a = [min, max];
    const [x, y] = a;
  }

  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    resolve(aleatorio);
  });
}

gerarNumerosEntre(10, 30)
  .then((num) => num * 10)
  .then((numX10) => `o número gerado foi ${numX10}`)
  .then(console.log);
