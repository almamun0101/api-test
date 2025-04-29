import React from "react";
import { Products } from "./Products";
import Navbar from "./Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


export const Home = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>
    },
    {
      path: "/products",
      element: <Products/>
    },
  ]);
 

  return (
    <div>
     <RouterProvider router={router} />

    </div>
  );
};
