function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas boas:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => (
          <p key={index}>
            O item na posição {index + 1} chama: <strong>{item}</strong>
          </p>
        ))
      ) : (
        <p>Não há itens na lista!</p>
      )}
    </>
  );
}

export default OutraLista;
