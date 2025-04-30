import React from "react";

export const Home = () => {

  const handleInput = (e)=>{
    console.log(e.target.value)
  }

  return (
    <div className="h-screen">
      <div className="flex justify-center flex-col items-center gap-2 ">
      <h2>Home Page</h2>
      <form action="" className="flex flex-col gap-5 ">
        <input type="text" className="border-2 w-50 rounded-2xl" onChange={handleInput}/>
        <button className="bg-green-600 text-white rounded-2xl ">Submit</button>
      </form>

      </div>
    </div>
  );
};
