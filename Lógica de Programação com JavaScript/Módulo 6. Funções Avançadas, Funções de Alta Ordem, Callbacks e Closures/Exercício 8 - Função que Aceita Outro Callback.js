// Crie uma função operar que receba dois números e uma função callback. A função operar deve retornar o resultado da execução de callback com esses números.

function somar(x, y) {
  return x + y;
}

function operar(x, y, cb) {
  return cb(x, y);
}

console.log(operar(5, 8, somar));

// Implemente uma callback que retorne o maior dos dois números.

function maior(x, y) {
  return Math.max(x, y);
}

console.log(operar(5, 8, maior));
