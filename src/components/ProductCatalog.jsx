import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h3>Product Catalog</h3>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}/unit
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalog;
