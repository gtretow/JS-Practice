const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const axios = require("axios");

const chineses = (f) => f.pais === "China";
const mulheres = (f) => f.genero === "F";
const salario = (func, funcAtual) =>
  func.salario < funcAtual.salario ? func : funcAtual;

axios.get(url).then((response) => {
  const funcionarios = response.data;
 /*  console.log(funcionarios); */

  //puxar a mulher chinesa com menor salário
  const func = funcionarios.filter(chineses).filter(mulheres).reduce(salario);

  console.log(func)
});
