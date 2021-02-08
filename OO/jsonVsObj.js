//Json é um formato de dados, textual e generico - não carrega nada especifico de um sistema
const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

console.log(JSON.stringify(obj)); //o nome deve ser dellimitado por aspas duplas
//função excluida pois JSON é um formato de dados, nada executavel

//console.log(JSON.parse("{a:1,b:2,c:3,d:4}"));
/* console.log(JSON.parse("{'a':1,'b':2,'c':3}")); */
console.log(JSON.parse('{"a":1,"b":2,"c":3,"d":4}'));

console.log(JSON.parse('{"a":1,"b":\"string"\,"c": true,"d": {}, "e": []}'));
