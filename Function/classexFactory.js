class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("João");
p1.falar();

const criarPessoa = (nome) => {
  return { falar: () => console.log(`meu nome é ${nome}`) };
};

const p2 = criarPessoa("João");
ps2.falar();

//no exemplo 2 a factory tem ciencia de seu escopo lexico e tem uma áre maior de escopo para agir
