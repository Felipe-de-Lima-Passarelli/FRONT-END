import { useEffect, useState } from "react";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1. Resgatando os dados
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  //2. Adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || price === "") {
      return;
    } else {
      setLoading(true);

      const product = {
        name,
        price,
      };

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      //3. Carregamento dinâmico
      const newProduct = await res.json();
      setProducts((actualProducts) => [...actualProducts, newProduct]);

      //4. Reset dos inputs após adição
      setName("");
      setPrice("");

      setLoading(false);
    }
  };

  //5. Deletar produtos
  const handleDelete = async (id) => {
    setLoading(true);
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    setProducts((actualProducts) =>
      actualProducts.filter((product) => product.id !== id)
    );

    setLoading(false);
  };

  //6. Loading
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {/* 6. Loading */}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
              <button
                onClick={() => handleDelete(product.id)}
                className="btn-submit"
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7. Loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
