import React from "react";
import { useLoaderData } from "react-router-dom";
import styles from "../style";
import { AiFillStar } from "react-icons/ai";

const ProductDetailsPage = () => {
  const { product } = useLoaderData();

  return (
    <div className={`${styles.padding}   `}>
      <div className="flex gap-4">
        <div className="w-[300px] border border-primary p-6 flex-[0.9]">
          <img src={product?.image} alt="" />
        </div>
        <div className="flex-[1.3]">
          <div className="flex flex-col ">
            <h1 className="md:text-2xl text-lg text-primary">
              {product?.title}
            </h1>
            <div className="flex flex-col gap-4">
              <span className="flex items-center">
                <AiFillStar className="text-primary" /> {product?.rating?.rate}
                <span>({product?.rating?.count}) Ratings</span>
              </span>
              <span className="text-lg">Category:{product?.category}</span>
              <span className="text-xl font-semibold">
                Price: ${product?.price}
              </span>
            </div>
            <p className="my-2 md:block hidden">
              <span className="font-semibold">Description:</span>
              {product?.description}
            </p>
            <div className="md:flex hidden gap-4  items-end">
              <button
                onClick={handleClick}
                className="bg-primary md:px-6 md:py-2 px-2 py-2"
              >
                Add To Cart
              </button>
              <button className="bg-green-500 text-white md:px-6 md:py-2 px-2 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="my-2 md:hidden block">
        <span className="font-semibold">Description:</span>
        {product?.description}
      </p>
      <div className="md:hidden flex gap-4  items-end">
        <button className="bg-primary md:px-6 md:py-2 px-2 py-2">
          Add To Cart
        </button>
        <button className="bg-green-500 text-white md:px-6 md:py-2 px-2 py-2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
