function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    if (algumNome !== undefined && algumNome !== "")
      return `Olá ${algumNome}, tudo bem?`;
  }

  return (
    <>
      <p>{gerarSaudacao(nome)}</p>
    </>
  );
}

export default Saudacao;
