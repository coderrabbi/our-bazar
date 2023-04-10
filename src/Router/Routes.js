import { createBrowserRouter } from "react-router-dom";
import Main from "../common/Main";
import Home from "../pages/Home";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import DashboardLayout from "../Layout/DashboardLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
          fetch(`https://fakestoreapi.com/products/${params.id}`),
        element: <ProductDetailsPage />,
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
