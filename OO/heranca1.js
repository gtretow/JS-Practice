const ferrari = {
  model: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "v40",
  velMax: 200,
};
console.log(ferrari.prototype); //está presente apenas em funções, não em objetos
console.log(ferrari.__proto__);//presente em objetos
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto() {}

console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);
