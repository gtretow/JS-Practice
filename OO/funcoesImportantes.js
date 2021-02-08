const pessoa = {
  nome: "rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

/* Object.entries(pessoa).forEach((e) => {
  console.log(`${e[0]}: ${e[1]}`);
}); */

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2020",
  //quase como uma freeze
});

pessoa.dataNascimento = "01/01/1999";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));
//se mudar enumerable para false, ele some do console.log

//object.assing

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
// pega os atributos de o1 e o2 e concatena em dest
Object.freeze(obj);
obj.c = 1234
console.log(obj)
