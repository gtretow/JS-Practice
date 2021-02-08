function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = { nome: "notebook", preco: 4589, desc: 0.15, getPreco };

console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49900, desc: 0.2 };

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//Call = passo primeiro parametro contexto | depois os parametros que serão passados para a função
console.log(getPreco.call(carro, 0.17, "$"));

//contexto | array com parametros
console.log(getPreco.apply(carro, [0.17, "$"]));
