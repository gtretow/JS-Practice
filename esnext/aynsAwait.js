//  promise
const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

/* let nomes = [];
getTurma("A").then((alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  console.log(nomes);
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    console.log(nomes);
  });

  getTurma("C", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
    console.log(nomes);
  });
});
 */

/* Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes))
  .catch((e) => console.log(e.message));

getTurma("D").catch((e) => console.log(e.message)); */

//recurso ES8
//objetivo é simplificar o uso de promises

let obterAlunos = async () => {
  const ta = await getTurma("A");
  const tb = await getTurma("B");
  const tc = await getTurma("C");
  return [].concat(ta, tb, tc);
}; //retorna um objeto asyncFunction

obterAlunos()
  .then((alunos) => alunos.map((a) => a.nome))
  .then((nomes) => console.log(nomes));
