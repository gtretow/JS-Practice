console.log(soma(3, 4)); //posso chamar antes mesmo dela ser declarada, pois o interpretador primeiro carrega as funções e depois executa o código
//function declaration
function soma(x, y) {
  return x + y;
}

//function expression
//essa só pode ser chamada depois que foi declarada
const sub = function (x, y) {
  return x - y;
};
console.log(sub(3, 4));

//named function expression

const mult = function mult(x, y) {
  return x * y;
};

console.log(mult(3, 4));
