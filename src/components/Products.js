import React, { useState } from "react";
import axios from "axios";
import Product from "./Product";
const Products = () => {
  const [products, setProducts] = useState(null);

  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => setProducts(response.data));
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 ">
      {products?.map((product) => (
        <Product product={product} className="h-[200px]" />
      ))}
    </div>
  );
};

export default Products;
