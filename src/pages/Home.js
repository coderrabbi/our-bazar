import React from "react";
import styles from "../style";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className={`${styles.padding}`}>
      <div className="flex flex-wrap ">
        <Products />
      </div>
    </div>
  );
};

export default Home;
