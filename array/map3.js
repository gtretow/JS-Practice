Array.prototype.map2 = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.90 }',
  '{ "nome": "Caneta", "preco": 7.90 }',
];

const obj = (json) => JSON.parse(json);

const apenasPreco = (produto) => produto.preco;
const resultado = carrinho.map(obj).map2(apenasPreco);
console.log(resultado);
