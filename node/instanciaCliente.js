const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor, contadorA.valor);
//o valor do contador B foi alterado junto do contador A

contadorC.inc();
contadorC.inc();
console.log(contadorD.valor, contadorC.valor);
//os valores são diferentes
