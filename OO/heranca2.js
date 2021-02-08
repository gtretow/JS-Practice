//cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "Z"; //não faça isso
const avo = { attr1: "A" }; //tem como prototype o Object.prototype
const pai = { __proto__: avo, attr2: "B", attr3: "3" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr0, filho.attr2, filho.attr3, filho.attr1);

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`;
  },
};

const ferrari = {
  model: "F40",
  velMax: 324, //shadowing
};

const volvo = {
  model: "V40",
  status() {
    return `${this.model}: ${super.status()}`;
  }, //shadowing
};

Object.setPrototypeOf(ferrari, carro); //segundo parametro é o prototipo
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100);
console.log(volvo.status());

ferrari.aceleraMais(400);
console.log(ferrari.status());
