import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="">
        <aside className="   border-r py-4 px-3 ">
          <div>
            <div className=" text-center">
              <img
                src={`${"https://source.unsplash.com/40x40/?portrait?1"}`}
                alt="user.name"
                className="w-10 h-10 m-auto rounded-full  object-cover lg:w-28 lg:h-28"
              />
              <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                hello
              </h5>
            </div>

            <ul className="space-y-2 tracking-wide mt-8">
              <li>
                <Link
                  to="/dashboard/myprofile"
                  className="px-4 py-3 flex items-center  space-x-4 rounded-xl text-black focus:text-white focus:bg-gradient-to-r  focus:from-yellow-700 focus:to-yellow-400"
                >
                  <span className="-mr-1 font-medium">My Account</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 flex items-center  space-x-4 rounded-xl text-black focus:text-white focus:bg-gradient-to-r  focus:from-yellow-700 focus:to-yellow-400"
                >
                  <span className="group-hover:text-gray-700">All Orders</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 flex items-center  space-x-4 rounded-xl text-black focus:text-white focus:bg-gradient-to-r  focus:from-yellow-700 focus:to-yellow-400"
                >
                  <span className="group-hover:text-gray-700">My Products</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 flex items-center  space-x-4 rounded-xl text-black focus:text-white focus:bg-gradient-to-r  focus:from-yellow-700 focus:to-yellow-400"
                >
                  <span className="group-hover:text-gray-700">Add Product</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-t">
            <button className="px-4 py-3  flex items-center space-x-4 rounded-md text-gray-600 group">
              <span></span>
              <span className="group-hover:text-gray-700">Logout</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
