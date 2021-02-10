function gerarNumerosEntre(min, max, tempo) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    setTimeout(function () {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 69, 1000),
    gerarNumerosEntre(1, 69, 500),
    gerarNumerosEntre(1, 69, 3000),
    gerarNumerosEntre(1, 69, 2000),
  ]);
}
gerarVariosNumeros().then((numeros) => console.log(numeros));
