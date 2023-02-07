import Lottie from "lottie-react";
import React from "react";
import "./Course.css";

import { Link } from "react-router-dom";
import Laptop from "../../Assets/laptop.json";

const Course = ({ info }) => {
  const { id, img, name, price } = info;
  return (
    <div className="">
      <div className=" glass shadow-lg rounded-t-md">
        <figure>
          <div className="bg-zinc-400  rounded-md">
            <img className="w-full h-60 p-2   rounded-lg" src={img} alt="" />
          </div>
        </figure>
        <div className="h-[150px] bg-gradient-to-r from-cyan-900 bg-stone-300 rounded-md">
          <div className="">
            <div className="flex justify-between px-4">
              <div>
                <h2 className="card bg-green-200 hover:bg-teal-500 hover:text-slate-100  cursor-not-allowed mt-2  py-1 px-3  text-green-700">
                  {name}
                </h2>
              </div>
              <div className="mt-4">
                 <Link
                  to={`/course/${id}`}>
                  <button className=" glass py-1 px-3 rounded text-sky-800 font-semibold hover:bg-sky-200">Details</button>
                </Link> 
                
              </div>
              <div>
                <p className=" text-green-700 text-xl font-bold  mt-2">
                  $ {price}
                </p>
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
