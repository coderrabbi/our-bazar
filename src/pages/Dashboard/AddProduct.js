import React, { useContext, useState } from "react";
import styles from "../../style";
import { toast } from "react-hot-toast";
import axiosInstance from "../../utils/axiosInstance";
import { AuthContext } from "../../context/AuthProvider";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const { currentUser } = useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const imgUrl = form.imgUrl.value;
    const description = form.description.value;
    const price = form.price.value;
    const productInfo = {
      title: title,
      imgUrl: imgUrl,
      description: description,
      category: category,
      price: price,
      email: currentUser?.email,
    };

    await axiosInstance.post("/api/product", productInfo, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    toast.success("products adeed successfully");
    form.reset();
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={`${styles.padding}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group ">
          <input
            type="text"
            name="title"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Title
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="imgUrl"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Image Url
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <label className="peer-focus:font-medium  text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mr-2">
              Category
            </label>
            <select
              onChange={handleChange}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Pick a Category
              </option>
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Description"
          ></textarea>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="price"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white  bg-primary hover:bg-grey-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary "
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
