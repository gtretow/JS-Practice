//tagged templates - processar o template dentro de uma função

function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "outra string";
}

const aluno = "Gui";
const situacao = "Aprovado";
console.log(tag`${aluno} está ${situacao}`);
