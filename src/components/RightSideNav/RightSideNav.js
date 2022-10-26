import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import icon1 from "../../Assets/infoIcon/icons8-video-tutorial-66.png";
import icon2 from "../../Assets/infoIcon/icons8-time-span-80.png";
import icon3 from "../../Assets/infoIcon/icons8-schoolboy-at-a-desk-64.png";
import icon4 from "../../Assets/infoIcon/icons8-courses-64.png";

const RightSideNav = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/courses")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="mt-20">
      <h1 className="lg:text-4xl p-2 font-semibold border-b-4 border-b-slate-500 rounded-b-lg text-cyan-900">
        Choice your courses
      </h1>

      {info.map((d) => (
        <Link key={d.id} to={`/course/${d.id}`}>
          <p className="mt-6" key={d.id}>
            <button className="border rounded-full px-4 py-1 bg-green-200 hover:bg-green-500">
              {d.name}{" "}
              <FaAngleDoubleRight className="inline text-cyan-900 items-center"></FaAngleDoubleRight>
            </button>
          </p>
        </Link>
      ))}
      {/* <>
      <div className="mt-12"> 
         <div className="text-center items-center">
          <h1 className="text-xl font-bold text-black">4.8</h1>
          <div className="flex justify-center text-orange-400">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
          </div>
          <h4>3,272 Rating</h4>
        </div> 

        <div className="mt-14  text-green-800 hidden lg:block md:block font-semibold mx-auto">
          <div className="flex items-center ">
            <div className="border bg-red-100 mb-2 rounded-full p-2"><img className="w-8" src={icon1} alt="" /></div>
            <span className="ml-1">Best Tutoring</span>
          </div>
          <div  className="flex items-center">
          <div className="border rounded-full mb-2  lg:bg-cyan-300 p-2"><img className="w-8" src={icon2} alt="" /></div>
            <span className="ml-1">Lifetime Access</span>
          </div>
          <div className="flex items-center">
          <div className="border mb-2 bg-gray-300 rounded-full p-2"><img className="w-8" src={icon3} alt="" /></div>
            <span className="ml-1">800k+ Students</span>
          </div>
          <div  className="flex items-center"> 
          <div className="border mb-2 rounded-full bg-blue-300 p-2"><img className="w-8" src={icon4} alt="" /></div>
            <span className="ml-1">6+ Courses </span>
          </div>
        </div> 
      </div> 
      </> */}
    </div>
  );
};

export default RightSideNav;
