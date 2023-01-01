import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from './../Pages/Home/Categories/Products';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
              },
        ],
    },
]);
