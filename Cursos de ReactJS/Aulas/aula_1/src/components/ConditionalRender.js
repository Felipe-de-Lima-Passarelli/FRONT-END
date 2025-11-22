import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const name = "Felipe";

  return (
    <div>
      <h2>Isso será exibido?</h2>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é false</p>}
      {name === "Felipe" ? (
        <div>
          <p>O nome é Felipe</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
