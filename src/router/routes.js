import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Products from "./../Pages/Home/Categories/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>
  }
]);
