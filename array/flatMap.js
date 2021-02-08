const escola = [
  {
    nome: "turma m1",
    alunos: [
      { nome: "gustavo", nota: 8 },
      { nome: "tantofaz", nota: 6 },
    ],
  },
  {
    nome: "turma m2",
    alunos: [
      { nome: "gustavo2", nota: 8 },
      { nome: "tantofaz2", nota: 9 },
    ],
  },
];

const getNotaDoAluno = (a) => a.nota;
const getNotasdaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasdaTurma);
console.log(notas1);

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

const notas2 = escola.flatMap(getNotasdaTurma);
console.log(notas2);
