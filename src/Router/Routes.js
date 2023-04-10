import { createBrowserRouter } from "react-router-dom";
import Main from "../common/Main";
import Home from "../pages/Home";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import DashboardLayout from "../Layout/DashboardLayout";

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
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
