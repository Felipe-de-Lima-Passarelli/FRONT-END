//1. Array

const lista1 = [];
const lista2 = new Array();

console.log(lista1, lista2);

const nomes = ["Felipe", "Patricia"];

nomes.push("Vanessa"); //Adiciona na última posição
nomes.unshift("Rute"); //Adiciona na primeira posição
console.log(nomes);
console.log(nomes.length); //Número de elementos no Array
console.log(nomes.sort()); //Ordena em ordem alfabética

nomes.pop(); //Remove o último elemento do Array
nomes.shift(); //Remove o primeiro elemento do Array
console.log(nomes);

//2. Métodos Úteis (ForEach, Map, Filter e Reduce)

//ForEach
const usuarios = [
  { nome: "Felipe", cargo: "Front-end Developer" },
  { nome: "Ana", cargo: "UI Designer" },
  { nome: "Marcos", cargo: "Back-end Developer" },
];

usuarios.forEach((usuario, index) => {
  console.log(`${index + 1}. ${usuario.nome} — ${usuario.cargo}`);
});

//Map = Alterar para um novo Array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
const numerosQuadrado = numeros.map((number) => number ** 2);
console.log(numerosQuadrado);

//Filter = Filtar em um novo Array
const numerosPares = numeros.filter((number) => number % 2 === 0);
console.log(numerosPares);

//Reduce = Reduzir para um "total"
const numerosSoma = numeros.reduce((atual, number) => (atual += number), 0); //Zero ao final serve p/ iniciar atual em 0
console.log(numerosSoma);
