import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const url = "http://localhost:3000/products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <p>R${product.price}</p>
            <Link to={`/products/${product.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
