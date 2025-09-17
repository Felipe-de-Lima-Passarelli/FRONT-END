import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const HookUseReducer = () => {
  // Exemplo sem action
  const [number, setNumber] = useReducer(() => {
    return Math.random().toFixed(2) * 100;
  }, 0);

  // Exemplo com action
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Exemplo useReducer</h2>

      {/* Sem action */}
      <p>Número aleatório: {number}</p>
      <button onClick={setNumber}>Gerar número</button>

      <hr />

      {/* Com action */}
      <h3>Contador: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>Resetar</button>
      <hr />
    </div>
  );
};

export default HookUseReducer;
