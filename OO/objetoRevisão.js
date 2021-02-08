//coleção dinamica de pares chave/valor

const produto = new Object();
produto.nome = "cadeira";
produto["marca do produto"] = "generica";
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 8900,
  proprietario: {
    nome: "Raul",
    idade: 56,
    endereco: { logradouro: "Rua abc", numero: 123 },
  },
  condutores: [
    { nome: "Junior", idade: 19 },
    { nome: "Ana", idade: 52 },
  ],
  calcularValorSeguro: function () {},
};

carro.proprietario.endereco.numero = 1000
console.log(carro)


delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
