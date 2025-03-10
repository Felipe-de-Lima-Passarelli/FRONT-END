class ContaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo < valor) {
      console.log(
        `Saldo insuficiente! Saldo atual: R$${this.saldo.toFixed(2)}`
      );
    } else {
      this.saldo -= valor;
      this.verSaldo();
    }
  }

  verSaldo() {
    console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
  }
}

const minhaConta = new ContaBancaria("João");

minhaConta.depositar(1000);
minhaConta.sacar(500);
minhaConta.sacar(600);
minhaConta.verSaldo();

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

class ContaPoupanca extends ContaBancaria {
  constructor(titular, saldo = 0) {
    super(titular, saldo);
  }

  renderJuros(taxa) {
    this.saldo += this.saldo * (taxa / 100);
  }
}

const poupanca = new ContaPoupanca("Maria");
poupanca.depositar(2000);
poupanca.sacar(1000);
poupanca.renderJuros(10);
poupanca.verSaldo();

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

class Livro {
  constructor(titulo, autor, ano, disponibilidade = true) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.disponibilidade = disponibilidade;
  }

  emprestar() {
    if (!this.disponibilidade) {
      console.log("Não é possível emprestar o livro, pois já foi emprestado");
    } else {
      console.log("Livro emprestado");
      this.disponibilidade = false;
    }
  }

  devolver() {
    if (!this.disponibilidade) {
      console.log("Livro devolvido");
      this.disponibilidade = true;
    } else {
      console.log("Livro já está na livraria");
    }
  }

  detalhes() {
    const status = this.disponibilidade ? "Disponível" : "Indisponível";
    console.log(
      `Título: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano} | Disponibilidade: ${status}`
    );
  }
}

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
livro1.detalhes();
livro1.emprestar();
livro1.detalhes();
livro1.emprestar();
livro1.devolver();
livro1.devolver();
livro1.detalhes();

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro) {
    if (!this.livros.includes(livro)) {
      this.livros.push(livro);
    } else {
      console.log("Esse livro já existe na Biblioteca");
    }
  }
  removerLivro(livro) {
    const index = this.livros.indexOf(livro);
    if (index === -1) {
      console.log("Esse livro não está na Biblioteca no momento");
    } else {
      this.livros.splice(index, 1);
      console.log(`O livro '${livro}' foi removido da Biblioteca.`);
    }
  }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro("O Senhor dos Anéis");
biblioteca.removerLivro("O Senhor dos Anéis");
biblioteca.removerLivro("O Senhor dos Anéis");
