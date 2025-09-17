import HookUseContext from "../components/HookUseContext";
import { SomeContext } from "../components/someContext";

import { useContext } from "react";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>About</h2>
      <p>Valor do Contexto: {contextValue}</p>
    </div>
  );
};

export default About;
