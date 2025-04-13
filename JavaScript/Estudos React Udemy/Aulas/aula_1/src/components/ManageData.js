import { useState } from "react";

const ManageData = () => {
  const [number, setNumber] = useState(10);

  return (
    <div>
      <p>O valor é: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Mudar variável
      </button>
    </div>
  );
};

export default ManageData;
