let a = 1;
console.log(a);

let p = new Promise(function (cumprirrPrromessa) {
  cumprirrPrromessa({ x: 3, y: 4 });
  //só considera 1 valor, para passar mais de um valor, deve ser gerado como objeto
});

p.then(function (valor) {
  console.log(valor.x, valor.y, valor);
});

console.log(typeof p);
