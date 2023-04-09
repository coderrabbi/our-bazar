import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
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
            <span>${product?.price}</span>
            <span className="flex items-center">
              <AiFillStar className="text-primary" /> {product?.rating.rate}
              <span>({product?.rating.count})</span>
            </span>
          </div>
        </div>
        <div className="card-actions items-center justify-between">
          <span
            onClick={() => handleClick(product.id)}
            className="cursor-pointer flex gap-2"
          >
            {" "}
            {red ? (
              <AiFillHeart className="text-2xl text-red-400" />
            ) : (
              <AiOutlineHeart className="text-2xl" />
            )}
            Wishlist
          </span>

          <Link to={`/product/${product.id}`}>
            <button className="bg-yellow-500 px-4 py-2 rounded-md">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
