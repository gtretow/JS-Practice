//object.values/object.entries

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj)); //array com arrays

//melhorias na notação literal

const nome = "Carlas";
const pessoa = { nome, ola() {} };

//class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return "auau";
  }
}

console.log(new Cachorro().falar());
