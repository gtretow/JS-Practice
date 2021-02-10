//itera em valores

for (let letra of "Cod1go") {
  console.log(letra);
}

const assuntoEcma = ["Map", "Set", "Promise"];

for (const i in assuntoEcma) {
  console.log(i);
} //percorre o valor em indice

for (const assunto of assuntoEcma) {
  console.log(assunto);
} //percorre o valor em si

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (const assunto of assuntosMap) {
  console.log(assunto);
}

for (const chave of assuntosMap.keys()) {
  console.log(chave);
}

for (const valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}

const s = new Set(["a", "b", "c"]);

for (let letra of s) {
  console.log(letra);
}
