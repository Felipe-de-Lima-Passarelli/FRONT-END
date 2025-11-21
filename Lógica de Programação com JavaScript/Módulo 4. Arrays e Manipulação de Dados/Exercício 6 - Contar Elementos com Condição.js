// Dado um array de idades, conte quantas pessoas são maiores de idade (idade ≥ 18).

const idades = [25, 31, 50, 48, 15, 72, 89, 10];
const maiorIdade = idades.filter((idade) => idade >= 18);
console.log(maiorIdade.length);

// Calcule também a porcentagem de maiores de idade.

console.log(`${(maiorIdade.length * 100) / idades.length}%`);
