import styles from "./CartaoProduto.module.css";

const CartaoProduto = ({ nome, descricao, preco }) => {
  return (
    <div className={styles.cartao}>
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.descricao}>{descricao}</p>
      <p className={styles.preco}>R$ {preco.toFixed(2)}</p>
      <button className={styles.botao}>Comprar</button>
    </div>
  );
};

export default CartaoProduto;
