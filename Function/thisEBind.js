const pessoa = {
  saudacao: "bom dia",
  falar() {
    console.log(this.saudacao);
  },
};
//não funciona sem o This
pessoa.falar();
//o resultado dara undefined pois a nova const não possui um this.saudacao
const falar = pessoa.falar;

//passando o this para outra const
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

