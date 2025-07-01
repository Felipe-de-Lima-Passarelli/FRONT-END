// Crie um objeto usuario com nome e email. Crie uma cópia do objeto usando o spread operator {...}. Altere o email no novo objeto. Exiba o objeto original e a cópia.

const usuario = {
  nome: "Felipe",
  email: "teste@gmail.com",
};

const copiaUsuario = { ...usuario };
copiaUsuario.email = "novoemail@gmail.com";

console.log(usuario);
console.log(copiaUsuario);

// Mostre que eles são independentes (alterar um não muda o outro).

console.log(usuario === copiaUsuario);
