// Object.preventExtensions
//previne que objetos sejam aumentados(add novos atributos)

const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});

console.log("Extensivel:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// Object.seal

const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));
//não consegue add, excluir, mas consegue modificar os valores

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 25;

console.log(pessoa);

// Object.freeze = selado + valores contantes (writable = false)
