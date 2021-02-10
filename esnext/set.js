//estrutura de conjunto não indexada (array, objeto) e não aceita repetição
const times = new Set();
times.add("São Paulo");
times.add("Flamengo");
times.add("Palmeiras");
times.add("Palmeiras");

console.log(times);

console.log(times.size);
console.log(times.has("vasco"));
console.log(times.has("Vasco"));
times.delete("Flamengo");
console.log(times.has("Flamengo"));

const nomes = ["Raquel", "Lucas", "Julia"];
const nomeSet = new Set(nomes);
console.log(nomeSet);
