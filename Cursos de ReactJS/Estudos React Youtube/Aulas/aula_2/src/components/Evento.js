import Button from "./Button";

function Evento() {
  function meuEvento() {
    console.log("Opa, fui ativado!");
  }

  return (
    <>
      <p>Clique para disparar um Evento:</p>
      <Button event={meuEvento} text="Primeiro Evento" />
    </>
  );
}

export default Evento;
