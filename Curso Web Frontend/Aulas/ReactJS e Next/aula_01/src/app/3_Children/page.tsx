import Component_Children from "@/components/Component_Children";
import Nav from "@/components/Nav";

const Page = () => {
  return (
    <div>
      <h1>Componente com Filho (Children)</h1>
      <Nav />
      <br />
      <Component_Children>
        <h1>Children com Filho</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero <br />
          nesciunt accusantium, vel ducimus aliquam error maiores nemo <br />
          ut animi iure quidem dolor id eos delectus mollitia et alias iusto.
        </p>
      </Component_Children>
    </div>
  );
};

export default Page;
