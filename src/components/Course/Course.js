import Lottie from "lottie-react";
import React from "react";
import './Course.css'

import Laptop from "../../Assets/laptop.json";

const Course = ({ info }) => {
  const { id, title, img, name, price } = info;
  return (
    <div className="">
      <div className=" glass shadow-lg rounded-t-md">
        <figure>
          <img className="w-full h-60 rounded-t-md" src={img} alt="" />
        </figure>
        <div className="h-[150px] bg-stone-300">
          <div className="">
            <div className="flex justify-between px-4">
              <div>
              <h2 className="card  text-xl mt-2  py-1 px-3  text-slate-800">{name}</h2>
              </div>
              <div>
              <p className=" text-black text-xl font-bold  mt-2">$ {price}</p>
              </div>
            </div>
            <div className="">
              <Lottie className=" h-28" animationData={Laptop}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
