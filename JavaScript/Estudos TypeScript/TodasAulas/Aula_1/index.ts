//Compilar para JS -> npx tsc [Compila todos arquivos .ts do projeto]
//Compilar para JS -> npx tsc nomeArquivo.ts [Compila apenas o da pasta]
// Tipos básicos

let nome: string = "Luiz";
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol("Qualquer_Symbol");

//Arrays
let arrayNumeros1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayNumeros2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayString1: Array<string> = ["a", "b"];
let arrayString2: string[] = ["a", "b"];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: "Luiz",
  idade: 30,
  adulto: true, //Adulto é opcional
};

//Funções
function soma1(x: number, y: number): number {
  return x + y;
}

//Void
function soma2(x: number, y: number): void {
  console.log(x + y);
}

//Any
function semTipo(aleatorio: any) {
  return aleatorio;
}

//Tupla
const dadosCliente1: readonly [number, string] = [1, "Felipe"];
const dadosCliente2: readonly [number, string, string] = [2, "Luiz", "Miranda"];
const dadosCliente3: readonly [number, string, string?] = [3, "Marcos"];
const dadosCliente4: readonly [number, string, ...string[]] = [4, "Carlos"];

//Null
let x: null = null;

//Undefined
let y;

//Never
function criaErro(): never {
  throw new Error("Deu erro no programa");
}

//Enum
enum Cores {
  VERMELHO = 1,
  AZUL,
  AMARELO,
  ROXO,
}

//Unindo tipos (Number e String)
function somaOuConcateca(
  a: number | string,
  b: number | string
): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}
