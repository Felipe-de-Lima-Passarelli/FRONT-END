import "./App.css";
import CarrinhoDeCompras from "./components/CarrinhoDeCompras";
import StatusUsuario from "./components/StatusUsuario";
import CartaoProduto from "./components/CartaoProduto";

function App() {
  return (
    <div>
      <StatusUsuario />
      <br />
      <CarrinhoDeCompras />
      <br />
      <CartaoProduto
        nome="Fone de Ouvido"
        descricao="Excelente qualidade de som com cancelamento de ruído."
        preco={199.9}
      />
    </div>
  );
}

export default App;
