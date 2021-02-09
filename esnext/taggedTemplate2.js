function real(partes, ...valores) {
  const resultado = [];

  valores.forEach((valor, idx) => {
    valor = isNaN(valor) ? valor : `RS${valor.toFixed(2)}`;
    resultado.push(partes[idx], valor);
  });
  return resultado.join("");
}

const preco = 29.99;
const precoParcela = 11;
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
