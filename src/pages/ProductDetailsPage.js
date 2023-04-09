import React from "react";
import { useLoaderData } from "react-router-dom";
import styles from "../style";

const ProductDetailsPage = () => {
  const productData = useLoaderData();
  console.log(productData);
  return (
    <div className={`${styles.padding} flex gap-4 `}>
      <div className="w-[300px] border p-6 flex-1">
        <img src={productData?.image} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl text-primary">{productData.title}</h1>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
