import Lottie from "lottie-react";
import React from "react";

import Laptop from "../../Assets/laptop.json";

const Course = ({ info }) => {
  const { id, title, img, name, price } = info;
  return (
    <div className="">
      <div className=" glass shadow-lg rounded-t-md">
        <figure>
          <img className="w-full h-60 rounded-t-md" src={img} alt="" />
        </figure>
        <div className="card-body h-[150px] bg-base-500">
          <div className="flex">
            <div>
              <Lottie className="w-50 h-20" animationData={Laptop}></Lottie>
            </div>
            <div>
              <h2 className="card-title mb-2 text-white">{name}</h2>
              <p className="text-white">$ {price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
