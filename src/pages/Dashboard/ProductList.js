import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { AuthContext } from "../../context/AuthProvider";
import { CiEdit, CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const ProductList = () => {
  const { currentUser } = useContext(AuthContext);
  const [myProducts, setMyPRoducts] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/api/product?email=${currentUser?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setMyPRoducts(res.data.product));
  }, [currentUser.email]);
  const handelDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      axiosInstance
        .delete(`/api/product/${id}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data) {
            const remaining = myProducts.filter((review) => review._id !== id);
            setMyPRoducts(remaining);
          }
          toast.success("Product Deleted");
        });
    }
  };
  return (
    <div className="py-6">
      {myProducts?.length === 0 ? (
        <div>
          <h1 className="text- text-[70px] text-center text-bold">
            NO REVIEW FOUND
          </h1>
        </div>
      ) : (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Service Title
                </th>
                <th scope="col" className="py-3 px-6">
                  Review
                </th>
                <th scope="col" className="py-3 px-6">
                  Edit
                </th>
                <th scope="col" className="py-3 px-6">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {myProducts?.map((pd) => (
                <tr
                  key={pd?._id}
                  className="bg-white border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-black"
                  >
                    {pd?.title}
                  </th>
                  <td className="py-4 px-6">
                    {pd?.description.slice(0, 100) + "..."}
                  </td>

                  <td className="py-4 px-6">
                    <span className="flex justify-between items-center">
                      <Link
                        to={pd?._id}
                        className="font-medium text-yellow-600 dark:text-yellow-500 hover:underline"
                      >
                        <CiEdit className="text-3xl" />
                      </Link>
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex justify-between items-center">
                      <CiTrash
                        onClick={() => handelDelete(pd?._id)}
                        className="text-3xl text-yellow-500 cursor-pointer"
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductList;
