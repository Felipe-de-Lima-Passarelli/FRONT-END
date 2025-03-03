const pontuacaoUsuario = 1000;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário NORMAL";

console.log(nivelUsuario);

let nivelVip = false;
const nivelUsuario2 = nivelVip || "Usuário Normal";

console.log(nivelUsuario2);
