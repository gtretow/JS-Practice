//usando notação literal
const obj1 = {};

//object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//função construtora

function Produto(nome, preco, desc) {
  this.nome = nome; //visivel para fora do objeto
  this.preco = preco;
  this.desc = desc;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("caneta", 7.99, 0.15);
const p2 = new Produto("notebook", 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//Função factory
function criarFunctionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFunctionario("João", 7980, 4);
const f2 = criarFunctionario("Maria", 11400, 1);

console.log(f1.getSalario(), f2.getSalario());

/* Object.create */

const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// transformar JSON em Objeto

const fromJSON = JSON.parse('{"info":"sou um JSON"}');
console.log(fromJSON.info);
