const alunos = [
  { nome: "joão", nota: 7.3, bolsista: false },
  { nome: "maria", nota: 9.3, bolsista: true },
  { nome: "Cacau", nota: 8.3, bolsista: false },
];

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));

const algumBolsista = (resultado, bolsista) => resultado || bolsista;

console.log(alunos.map((a) => a.bolsista).reduce(algumBolsista));
