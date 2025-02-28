totalPessoas = [];

function criarPessoa() {
  const nome = document.querySelector(".inputNome").value;
  const sobrenome = document.querySelector(".inputSobrenome").value;
  const peso = document.querySelector(".inputPeso").value;
  const altura = document.querySelector(".inputAltura").value;

  const textos = document.querySelector(".textos");
  textos.innerHTML += `${nome} ${sobrenome} ${peso} ${altura}<br>`;

  totalPessoas.push({
    nome: nome,
    sobrenome: sobrenome,
    peso: peso,
    altura: altura,
  });

  console.log(totalPessoas);
}
