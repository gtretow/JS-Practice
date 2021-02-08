Array.prototype.reduce2 = function (callBack, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1;

  let acc = valorInicial || this[0];
  for (let i = indiceInicial; i < this.length; i++) {
    acc = callBack(acc, this[i], i, this);
  }
  return acc;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma, 21));
