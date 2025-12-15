interface botaoProps {
  functionProp: () => void;
}

const Botao = ({ functionProp }: botaoProps) => {
  return (
    <div>
      <button className="meuBotao" onClick={functionProp}>
        Calcular
      </button>
    </div>
  );
};

export default Botao;
