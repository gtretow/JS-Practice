function criarPessoa() {
  return { nome: "Ana", sobrenome: "Silva" };
}

console.log(criarPessoa());
//função que retorna uma estancia de objeto

function criarProduto(nome, preco) {
  return { nome, preco, desconto: 0.1 };
}

console.log(criarProduto("Notebook", 2199.49));
