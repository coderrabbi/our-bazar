import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Choose your favorite product from our site and buy it and enjoy
              your life
            </p>
            <Link to="/products">
              <button className="bg-primary py-4 px-8 rounded-md ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
