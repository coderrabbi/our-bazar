import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Product = ({ product }) => {
  const [red, setRed] = useState(false);
  const handleClick = (id) => {
    setRed(!red);
  };
  return (
    <div className="card w-50 bg-base-100 shadow-xl">
      <figure className="h-[200px]">
        <img
          className="w-[150px] h-auto object-cover"
          src={product?.image}
          alt={product?.title}
        />
      </figure>
      <div className="card-body ">
        <h2
          className="card-title text-[16px] leading-5 text-left tooltip"
          data-tip={product?.title}
        >
          {`${product?.title.slice(0, 38)}...`}
        </h2>
        <p
          className="text-[15px] text-left tooltip"
          data-tip={product?.description}
        >
          {" "}
          {`${product?.description.slice(0, 50)}...`}
        </p>
        <div className="flex justify-between">
          <div className="">
            {" "}
            <span>$ {product?.price}</span>
            <span className="flex items-center">
              <AiFillStar /> {product?.rating.rate}
            </span>
          </div>
          <span>Sales: {product?.rating.count}</span>
        </div>
        <div className="card-actions items-center justify-between">
          <span
            onClick={() => handleClick(product.id)}
            className="cursor-pointer flex gap-2"
          >
            {" "}
            {red ? (
              <AiOutlineHeart className="text-2xl" />
            ) : (
              <AiFillHeart className="text-2xl text-red-400" />
            )}
            Wishlist
          </span>

          <button className="bg-yellow-500 px-4 py-2 rounded-md">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
