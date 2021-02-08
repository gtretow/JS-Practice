//pessoa => 123 => {...}
const pessoa = { nome: "João" };
pessoa.nome = "Pedro";

console.log(pessoa);

//Pessoa ->  456 -> {...}
/* pessoa = { nome: "Ana" }; */
//não será possível pois pessoa já está em outro endereço de memória (123 no caso)


//não consegue mais mecher no objeto
Object.freeze(pessoa)