// Peça os três lados de um triângulo e determine se eles formam um triângulo válido (a soma de dois lados precisa ser maior que o terceiro). Se for válido, informe: Equilátero (3 lados iguais) / Isósceles (2 lados iguais) / Escaleno (3 lados diferentes. Adapte para mostrar uma mensagem de erro caso os valores não formem um triângulo.

const [x, y, z] = [3, 4, 5];

if (x + y < z || x + z < y || y + z < x) {
  console.log("Não é possível formar um triângulo com esses valores");
} else {
  if (x === y && y === z) {
    console.log("É um Triângulo Equilátero");
  } else if (x === y || x === z || y === z) {
    console.log("É um Triângulo Isósceles");
  } else {
    console.log("É um Triângulo Escaleno");
  }
}
