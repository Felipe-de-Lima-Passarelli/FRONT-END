function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
}

saudacao("Felipe");

function soma(x = 1, y = 9) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 5));
console.log(soma());

const raiz = (n) => {
  return n ** 0.5;
}; // Ou também const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
