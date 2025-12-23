//Components
import Button from "./Button";

const NestedRoutes = () => {
  return (
    <>
      <h2 className="my-2">Módulo 4 - Nested Routes</h2>
      <Button
        href="/products/categories/roupas"
        text="Ir para o exemplo de Nested Routes com roupas"
      />
      <br />
      <br />
      <Button
        href="/products/categories/raquetes"
        text="Ir para o exemplo de Nested Routes com raquete"
      />
    </>
  );
};

export default NestedRoutes;
