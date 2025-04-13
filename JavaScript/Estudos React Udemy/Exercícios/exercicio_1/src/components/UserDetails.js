const UserDetails = ({ pessoas }) => {
  return (
    <>
      <ul>
        {pessoas.map((pessoa) => (
          <>
            <li>Nome: {pessoa.nome}</li>
            <li>Idade: {pessoa.idade}</li>
            <li>Profissão: {pessoa.profissao}</li>
            <p>Pode tirar habilitação: {pessoa.idade >= 18 ? "Sim" : "Não"}</p>
            <br />
          </>
        ))}
      </ul>
    </>
  );
};

export default UserDetails;
