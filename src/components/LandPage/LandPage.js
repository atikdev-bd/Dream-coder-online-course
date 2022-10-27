import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import computer2 from "../../Assets/computerLand.json";
import Arrow from "../../Assets/icon/icons8-arrow-91.png";
import "./LandPage.css";

const LandPage = () => {
  return (
    <div className="w-auto bg-slate-800">
      <pre className="text-white text-center text-xl lg:text-4xl font-bold py-8">
        WELCOME TO DREAM CODER
      </pre>
      <div className="flex justify-center">
        <Link to="/home">
          <img
            className="hover:bg-zinc-900 p-2 rounded-md w-20 lg:w-full"
            src={Arrow}
            alt=""
          />
        </Link>
      </div>
      <Lottie className="w-auto h-auto" animationData={computer2}></Lottie>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default LandPage;
