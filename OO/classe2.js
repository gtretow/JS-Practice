//classe é uma forma diferente de escrever uma função
class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}
//Pai tem Avo como prototipo
class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}

const filho = new Filho();
console.log(filho);
