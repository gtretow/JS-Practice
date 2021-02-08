const alunos = [
  { nome: "joão", nota: 7.3, bolsista: false },
  { nome: "maria", nota: 9.3, bolsista: true },
  { nome: "Cacau", nota: 8.3, bolsista: false },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acc, atual) {
    return acc + atual;
  }, 0);

  console.log(resultado)