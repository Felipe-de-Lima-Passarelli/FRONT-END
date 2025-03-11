class ValidaCPF {
  constructor(cpf) {
    this.cpf = cpf.replace(/\D/g, "");
  }

  verificarCPF() {
    if (!this.cpf || this.cpf.length !== 11 || this.ehSequencial()) {
      console.log("CPF INVÁLIDO");
      return;
    }

    let cpfParcial = this.cpf.slice(0, -2);
    let primeiroArray = [10, 9, 8, 7, 6, 5, 4, 3, 2]
      .map((valor, indice) => valor * cpfParcial[indice])
      .reduce((acumulador, valor) => acumulador + valor, 0);

    let primeiroDigito = 11 - (primeiroArray % 11);
    primeiroDigito = primeiroDigito >= 10 ? 0 : primeiroDigito;

    cpfParcial += primeiroDigito;
    let segundoArray = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
      .map((valor, indice) => valor * cpfParcial[indice])
      .reduce((acumulador, valor) => acumulador + valor, 0);

    let segundoDigito = 11 - (segundoArray % 11);
    segundoDigito = segundoDigito >= 10 ? 0 : segundoDigito;

    cpfParcial += segundoDigito;

    console.log(cpfParcial === this.cpf ? "CPF VÁLIDO" : "CPF INVÁLIDO");
  }

  ehSequencial() {
    return this.cpf.split("").every((num) => num === this.cpf[0]);
  }
}

cpf1 = new ValidaCPF("490.834.521-07");
cpf1.verificarCPF();

cpf2 = new ValidaCPF("111.111.111-11");
cpf2.verificarCPF();
