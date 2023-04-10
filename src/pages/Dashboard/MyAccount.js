import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyAccount = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <div className="w-[70%] mx-auto  mt-7">
        <h1 className="text-5xl font-bold my-5">My Account</h1>
        <div className="w-[90%] mx-auto">
          <div>
            <div className="w-full pt-2 pb-1 px-3 my-2 border-b border-primary ">
              <span className="bg-inherit focus:outline-none text-black">
                {currentUser?.name}
              </span>
            </div>
            <div className="w-full pt-2 pb-1 px-3 my-2 border-b border-primary ">
              <span className="bg-inherit focus:outline-none text-black">
                {currentUser?.phoneNumber}
              </span>
            </div>
            <div className="w-full pt-2 pb-1 px-3 my-2 border-b border-primary ">
              <span className="bg-inherit focus:outline-none text-black">
                {currentUser?.email}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <button className="font-bold text-yellow-500 underline">
            Delete Your Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
