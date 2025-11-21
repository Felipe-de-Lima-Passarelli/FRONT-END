// Peça ao usuário uma lista de números (como "4, 5, 9, 12"), e informe quantos são pares e quantos são ímpares.

const listaNumeros = [4, 5, 9, 12];
let pares = 0;
let impares = 0;

for (let numero of listaNumeros) {
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`Temos ${pares} números pares e ${impares} números ímpares`);

//Crie uma função que retorne um objeto com { pares: X, impares: Y }.

function parimpar(lista) {
  let obj = {
    pares: [],
    impares: [],
  };

  for (let numero of lista) {
    if (numero % 2 === 0) {
      obj.pares.push(numero);
    } else {
      obj.impares.push(numero);
    }
  }

  return obj;
}

console.log(parimpar(listaNumeros));
