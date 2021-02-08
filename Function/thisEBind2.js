function Pessoa() {
  this.idade = 0;
  //criação de um self, tornando o this sendo reconhecido fora do contexto da função
  const self = this;
  //dispara outra função a partir de determinado intervalo
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /* .bind(this) */,
    1000
  );
}

new Pessoa();
