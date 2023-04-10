import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import Loader from "./Loader";
import axiosInstance from "../utils/axiosInstance";
const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/api/allproducts")
      .then((response) => setProducts(response.data));
  }, []);
  return (
    <div>
      <h1 className="text-center uppercase text-2xl font-semibold my-5">
        Just For You
      </h1>
      {products == null ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 ">
          {products?.map((product) => (
            <Product
              key={product._id}
              product={product}
              className="h-[200px]"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
