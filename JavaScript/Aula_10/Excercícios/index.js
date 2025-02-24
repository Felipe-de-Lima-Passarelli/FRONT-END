const nome = prompt("Digite o seu nome completo: ");
document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br>`;
document.body.innerHTML += `Seu nome tem <strong>${
  nome.split(" ").join("").length
}</strong> letras<br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br>`;
document.body.innerHTML += `O primeiro índice da letra "A" no seu nome é: <strong>${nome
  .toLowerCase()
  .indexOf("a")}</strong><br>`;
document.body.innerHTML += `O último índice da letra "A" no seu nome é: <strong>${nome
  .toLowerCase()
  .lastIndexOf("a")}</strong><br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome
  .split(" ")
  .join("")
  .slice(-3)}</strong><br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(
  " "
)}</strong><br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong> <br>`;
