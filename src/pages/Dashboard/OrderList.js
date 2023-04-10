import React, { useContext } from "react";
import { CiTrash } from "react-icons/ci";

import axiosInstance from "../../utils/axiosInstance";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const OrderList = () => {
  const { myOrder, setMyOrder } = useContext(AuthContext);
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
            const remaining = myOrder.filter((review) => review._id !== id);
            setMyOrder(remaining);
          }
          toast.success("Product Deleted");
        });
    }
  };

  return (
    <div className="py-6">
      {myOrder?.length === 0 ? (
        <div>
          <h1 className="text- text-[70px] text-center text-bold">
            NO ORDER FOUND
          </h1>
        </div>
      ) : (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Title
                </th>
                <th scope="col" className="py-3 px-6">
                  Description
                </th>

                <th scope="col" className="py-3 px-6">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {myOrder?.map((order) => (
                <tr
                  key={order?._id}
                  className="bg-white border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-black"
                  >
                    {order?.title}
                  </th>
                  <td className="py-4 px-6">
                    {order?.description.slice(0, 100) + "..."}
                  </td>

                  <td className="py-4 px-6">
                    <span className="flex justify-between items-center">
                      <CiTrash
                        onClick={() => handelDelete(order?._id)}
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

export default OrderList;
