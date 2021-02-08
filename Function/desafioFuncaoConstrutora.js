function Pessoa(nome) {
  this.nome = nome;
  this.falar() = function () {
    console.log(`meu nome é ${this.name}`);
  };
}

const p1 = new Pessoa("João");
p1.falar();


