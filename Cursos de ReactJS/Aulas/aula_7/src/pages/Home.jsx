import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookUseEffect from "../components/HookUseEffect";
import HookUseContext from "../components/HookUseContext";
import { SomeContext } from "../components/someContext";
import HookUseRef from "../components/HookUseRef";

import { useContext } from "react";
import HookUseCallback from "../components/HookUseCallback";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do Contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
    </div>
  );
};

export default Home;
