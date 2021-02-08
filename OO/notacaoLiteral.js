const a = 1;
const b = 2;
const c = 3;

//antigamente
const obj1 = { a: a, b: b, c: c };
//agora
const obj2 = { a, b, c };

const nomeAttr = "nota";
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = { [nomeAttr]: valorAttr }; //pega o valor e cria um atributo com esse valor

//definir funções em obj literas
const obj5 = {
  funcao1: function () {
      ///....
  },
  funcao2(
      // ....
  )
};
