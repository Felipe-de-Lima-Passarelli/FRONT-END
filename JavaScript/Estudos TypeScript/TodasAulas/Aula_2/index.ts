//Compilar para JS -> npx tsc [Compila todos arquivos .ts do projeto]
//Compilar para JS -> npx tsc nomeArquivo.ts [Compila apenas o da pasta]

//Condicional
const body1 = document.querySelector("body");
if (body1) body1.style.background = "red";

// Non-null Assertion (!)
const body2 = document.querySelector("body")!;
body2.style.background = "blue";

// Type Assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "blue";
