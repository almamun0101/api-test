
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiStar } from "react-icons/ci";



export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((product) => {
      setProducts(product.data);
      console.log(product.data);
    });
  }, []);

  return (
    <div className="bg-gray-700 w-full h-full py-10 mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="container ">
        <div className="text-white">
          <h1 className="p-5">Products</h1>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
         
         {
          products.map((item)=>(
            <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
          
              <div className="h-48 bg-gray-100 p-4 flex items-center justify-center">
              <img
                className="h-full object-contain"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="px-2 py-3 bg-white rounded-br-lg rounded-bl-lg">
              <div className="flex justify-between">
                <h1 className="font-bold ">{item.title}</h1>
                <p className="italic font-medium"> </p>
              </div>
              <div className="flex py-1 text-shadow-amber-400">
                <CiStar className="text-amber-300" />
                <CiStar className="text-amber-300" />
                <CiStar className="text-amber-300" />
                <CiStar />
                <CiStar />
              </div>
              <div className="">
                <h1 className="text-xs italic pb-3 pt-1">Catagory : Gadget</h1>
              </div>
              <div className="text-sm leading-4  font-light text-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae aut eius quisquam adipisci ipsam voluptates.
                </p>
              </div>
            </div>
          </div>
          ))
         }
         
        </div>
      </div>
    </div>
  );
};
