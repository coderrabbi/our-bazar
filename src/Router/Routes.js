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
import OrderList from "../pages/Dashboard/OrderList";
import Products from "../components/Products";

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
          fetch(`https://our-bazar-server.vercel.app/${params.id}`),
        element: <ProductDetailsPage />,
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/products", element: <Products /> },
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
      { path: "/dashboard/myorder", element: <OrderList /> },
    ],
  },
]);
