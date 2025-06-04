import styles from "./CarrinhoDeCompras.module.css";
import { useState } from "react";

const CarrinhoDeCompras = () => {
  const [produtos, setProdutos] = useState([
    "Arroz",
    "Feijão",
    "Carne",
    "Ovo",
    "Refrigerante",
  ]);

  const [novoProduto, setNovoProduto] = useState("");

  const adicionarProduto = () => {
    if (novoProduto.trim() === "") {
      alert("Digite o nome do produto");
      return;
    }
    if (produtos.includes(novoProduto)) {
      alert("Esse produto já está no carrinho");
      return;
    }
    setProdutos((atual) => [...atual, novoProduto]);
    setNovoProduto("");
  };

  const removerProduto = (index) => {
    setProdutos(produtos.filter((_, pos) => pos !== index));
  };

  return (
    <div className={styles.container}>
      <h3>Produtos</h3>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>
            {produto}
            <button onClick={() => removerProduto(index)}>Remover</button>
          </li>
        ))}
        <br />
      </ul>
      {produtos.length > 0 && (
        <p>Total de itens no carrinho: {produtos.length}</p>
      )}
      <br />
      <label>
        <input
          type="text"
          value={novoProduto}
          onChange={(e) => setNovoProduto(e.target.value)}
        />
        <button onClick={adicionarProduto}>Adicionar</button>
      </label>
    </div>
  );
};

export default CarrinhoDeCompras;
