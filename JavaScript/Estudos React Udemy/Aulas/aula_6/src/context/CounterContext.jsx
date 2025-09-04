// 1. Importar dependências
import { createContext, useState } from "react";

// 2. Criar o contexto
const CounterContext = createContext();

// 3. Exportar o contexto
export default CounterContext;

//4. Criar e exportar o provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
