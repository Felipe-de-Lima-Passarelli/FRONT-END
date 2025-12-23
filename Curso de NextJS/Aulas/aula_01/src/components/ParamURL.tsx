//Components
import Button from "./Button";

const ParamURL = () => {
  return (
    <div className="mt-2">
      <h2 className="my-2">Módulo 3 - Parâmetros na URL</h2>
      <Button href="/params?name=Felipe" text="Parâmetros na URL" />
    </div>
  );
};

export default ParamURL;
