import React from "react";
import styles from "../style";
import Products from "../components/Products";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className={`${styles.padding}`}>
        <Products />
      </div>
    </div>
  );
};

export default Home;
