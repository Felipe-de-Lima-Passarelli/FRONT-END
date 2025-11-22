const ChangeMessageState = ({ handleMessage }) => {
  const messages = ["Oi", "Olá", "Oi, tudo bem?"];

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>Botão 1</button>
      <button onClick={() => handleMessage(messages[1])}>Botão 2</button>
      <button onClick={() => handleMessage(messages[2])}>Botão 3</button>
    </div>
  );
};

export default ChangeMessageState;
