import Nav from "@/components/Nav";

const Page = () => {
  const usuarios = [
    { id: 1, nome: "Jamilton", email: "jamilton@gmail.com" },
    { id: 2, nome: "Ana", email: "ana@gmail.com" },
    { id: 3, nome: "João", email: "joao@gmail.com" },
    { id: 4, nome: "Maria", email: "Maria@gmail.com" },
    { id: 5, nome: "Carlos", email: "Carlos@gmail.com" },
  ];

  const lista = usuarios.map((usuario) => (
    <li key={usuario.id}>
      {usuario.nome} - {usuario.email}
    </li>
  ));

  return (
    <div>
      <Nav />
      <ul>{lista}</ul>
    </div>
  );
};

export default Page;
