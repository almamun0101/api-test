import "./App.css";
import { About } from "./component/About";
import { Home } from "./component/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Rootlayout } from "./layout/Rootlayout";
import { Component } from "react";
import { Products } from "./component/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children:[
        {
          index:true,
          Component: Home
        },
        {
          path:"/about",
          Component: About,

        },
        {
          path:"/products",
          Component: Products,

        }
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
