// Peça um email e verifique se ele contém o caractere @ e um ponto (.) depois do @.

const email = "teste@gmail.com";
let status = false;
const pos = email.indexOf("@") + 1;

for (let i = pos; i < email.length; i++) {
  if (email[i] === ".") {
    status = true;
    break;
  }
}

console.log(email.includes("@") && status ? "Email válido" : "Email Inválido");
