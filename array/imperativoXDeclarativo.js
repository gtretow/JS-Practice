const alunos = [
  { nome: "joão", nota: 7.3 },
  { nome: "maria", nota: 9.3 },
  { nome: "Cacau", nota: 8.3 },
];

//imperativo - como é feito é mais importante do que o que tem que ser feito
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}

console.log(total1 / alunos.length);

//declarativo - o que tem que ser feito é mais importante
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);

console.log(total2 / alunos.length);
