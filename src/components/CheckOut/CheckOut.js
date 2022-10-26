import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
  const singleInfo = useLoaderData();
  const { img, price, id, name } = singleInfo;

  const handleEnroll =()=>{
    toast.success('Enroll Successful')
  }
  return (
    <div className="flex justify-center my-8 mx-4">
      <div className="card lg:w-[800px] bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className=" text-green-500 lg:text-4xl card-title">{name}</h2>
          <p className="text-2xl text-cyan-600">
            Are you ready for this journey...
          </p>
          <div className="card-actions flex justify-between">
            <div><h1 className="lg:text-4xl"> $ {price}</h1></div>
           <div>
           <button onClick={handleEnroll} className="btn btn-primary">Enroll</button>
           </div>
           <Toaster></Toaster>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
