import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const url = "http://localhost:3000/products/" + id;

  useEffect(() => {
    async function FetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProduct(data);
    }
    FetchData();
  }, [url]);

  return (
    <div className="detalhes">
      <p>ID do produto: {id}</p>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <h3>R${product.price}</h3>
          <Link to={`/products/${id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  );
};

export default Product;
