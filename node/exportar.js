console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = { nome: "teste" };
//a forma correta é module.exports = {nome:'teste'}
console.log(module.exports); // continua sendo { a: 1, b: 2, c: 3 }
