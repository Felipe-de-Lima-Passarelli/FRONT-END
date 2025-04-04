import { useNavigate } from "react-router-dom";
import Formulario from "../Formulario";
import styles from "./NovosProjetos.module.css";

function NovosProjetos() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resposta) => resposta.json())
      .then((dados) => {
        const state = { message: "Projeto criado com sucesso!" };
        navigate("/projetos", { state });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.novoProjeto}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <Formulario handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NovosProjetos;
