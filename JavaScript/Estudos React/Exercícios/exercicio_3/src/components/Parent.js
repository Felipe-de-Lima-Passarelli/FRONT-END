import Child from "./Child";

function Parent({ nome }) {
  function handleClick() {
    window.alert("Botão Clicado");
  }

  return (
    <>
      <h2>{nome}</h2>
      <Child onClick={handleClick} />
    </>
  );
}

export default Parent;
