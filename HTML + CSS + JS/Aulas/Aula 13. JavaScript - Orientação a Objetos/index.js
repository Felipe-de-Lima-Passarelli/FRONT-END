//1. Orientado a objetos

const hotel = {
  quartos: 20,
  ocupados: 5,

  verificarDisponibilidade() {
    return `${this.quartos - this.ocupados} quartos disponíveis`;
  },
};

console.log(hotel.verificarDisponibilidade());

class Apartamento {
  constructor() {
    this.quartos = 20;
    this.ocupados = 15;
  }

  verificarDisponibilidade() {
    return `${this.quartos - this.ocupados} quartos disponíveis`;
  }
}

const apartamento = new Apartamento();

console.log(apartamento.verificarDisponibilidade());

//2. Abstração

class Carro {
  constructor() {
    this.marca = "Volkswagen";
    this.ligado = false;
    this.modelo = "Gol";
    this.cor = "Prata";
    this.placa = "EMJ-2565";
  }

  ligar() {
    if (this.ligado === false) this.ligado = true;
  }

  desligar() {
    if (this.ligado === true) this.ligado = false;
  }
}

const carro = new Carro();

carro.modelo = "Golf"; //Mudando o modelo do carro

carro.ligar();
console.log(carro);

carro.desligar();
console.log(carro);

//3. Herança

//Classe pai
class Animal {
  constructor() {
    this.cor = "";
    this.tamanho = 0;
    this.peso = 0;
  }

  correr() {
    console.log("Correr");
  }

  dormir() {
    console.log("Dormir");
  }
}

//Classe filho
class Cachorro extends Animal {
  constructor() {
    super(); //Super vazio pois classe pai não recebe argumentos
  }

  latir() {
    console.log("Latir");
  }
}

//Classe filho
class Passaro extends Animal {
  constructor() {
    super(); //Super vazio pois classe pai não recebe argumentos
  }

  voar() {
    console.log("Voar");
  }
}

const animal = new Animal();
animal.peso = 10;
console.log(animal);

const cachorro = new Cachorro();
cachorro.peso = 5;
console.log(cachorro);
cachorro.latir();

const passaro = new Passaro();
passaro.peso = 1;
console.log(passaro);
passaro.voar();
