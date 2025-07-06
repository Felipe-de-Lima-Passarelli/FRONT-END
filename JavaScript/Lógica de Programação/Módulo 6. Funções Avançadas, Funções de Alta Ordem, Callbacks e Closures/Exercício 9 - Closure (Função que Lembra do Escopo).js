// Crie uma função contador que inicia em zero e retorna uma função que, ao ser chamada, incrementa e retorna o contador.

function contador() {
  let atual = 0;
  return function () {
    atual++;
    return atual;
  };
}

const meuContador1 = contador();
console.log(meuContador1());
console.log(meuContador1());
console.log(meuContador1());

// Crie múltiplos contadores independentes e mostre que eles não compartilham o mesmo valor.

const meuContador2 = contador();
console.log(meuContador2());
console.log(meuContador1());
console.log(meuContador2());
