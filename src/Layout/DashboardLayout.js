import React from "react";
import Navbar from "../common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Sidebar from "../pages/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <div>
        {/* Header */}
        <Navbar />
        {/* <!-- component --> */}
        <div className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-4">
          <div>
            <Sidebar></Sidebar>
          </div>

          <div className="col-span-3 bg-[#f3f4f6] ">
            <Outlet></Outlet>
          </div>
        </div>

        {/* Footer */}

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
