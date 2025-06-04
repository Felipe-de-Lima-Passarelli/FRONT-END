import styles from "./ListaDeCompras.module.css";
import { useState } from "react";

const ListaDeCompras = () => {
  const [lista, setLista] = useState(["Maça", "Banana", "Uva"]);
  const [novaFruta, setNovaFruta] = useState("");

  const adicionarFruta = () => {
    if (novaFruta.trim() === "" || lista.includes(novaFruta)) return;
    setLista((atual) => [...atual, novaFruta]);
    setNovaFruta("");
  };

  const removerFruta = (posicao) => {
    setLista(lista.filter((_, index) => index !== posicao));
  };

  return (
    <div className={styles.borda}>
      <h3>Lista de Frutas</h3>
      <ul>
        {lista.map((fruta, index) => (
          <li key={index} className={styles.itemLista}>
            {fruta}
            <button
              className={styles.botao}
              onClick={() => removerFruta(index)}
            >
              Remover
            </button>
          </li>
        ))}
        <label>
          Adicionar Frutas:
          <input
            type="text"
            value={novaFruta}
            onChange={(e) => setNovaFruta(e.target.value)}
          />
          <button onClick={adicionarFruta}>Adicionar</button>
        </label>
      </ul>
    </div>
  );
};

export default ListaDeCompras;
