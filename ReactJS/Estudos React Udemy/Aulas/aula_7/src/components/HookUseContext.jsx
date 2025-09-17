import { SomeContext } from "./someContext";

const HookUseContext = ({ children }) => {
  const contextValue = "Testando contexto";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};

export default HookUseContext;
