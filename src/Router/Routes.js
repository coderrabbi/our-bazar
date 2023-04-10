import { createBrowserRouter } from "react-router-dom";
import Main from "../common/Main";
import Home from "../pages/Home";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import DashboardLayout from "../Layout/DashboardLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivetRouter from "./PrivetRouter";
import MyAccount from "../pages/Dashboard/MyAccount";
import AddProduct from "../pages/Dashboard/AddProduct";
import ProductList from "../pages/Dashboard/ProductList";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/product/${params.id}`),
        element: <ProductDetailsPage />,
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRouter>
        <DashboardLayout />
      </PrivetRouter>
    ),
    children: [
      { path: "/dashboard", element: <MyAccount /> },

      { path: "/dashboard/addproduct", element: <AddProduct /> },
      { path: "/dashboard/myproducts", element: <ProductList /> },
    ],
  },
]);
