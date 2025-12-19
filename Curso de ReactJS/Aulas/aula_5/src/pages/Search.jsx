import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const Search = () => {
  const [product, setProduct] = useState([]);
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams.toString();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProduct(data);
    }
    fetchData();
  }, [url]);

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      <ul className="products">
        {product.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>R${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
