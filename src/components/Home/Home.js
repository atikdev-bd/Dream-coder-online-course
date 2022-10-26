import Lottie from "lottie-react";
import { useLoaderData } from "react-router-dom";

import computer from "../../Assets/computer.json";
import online from "../../Assets/online-class.json";
import Course from "../Course/Course";
import RightSideNav from "../RightSideNav/RightSideNav";
import "./Home.css";

const Home = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    <div className="flex-row lg:flex-col-reverse">
      <div>
        <div className="courses-container">
          <div className="grid lg:grid-cols-2 mx-auto border-b-slat bg-stone- items-center">
            <div>
              <Lottie animationData={computer}></Lottie>
            </div>
            <div>
              <Lottie animationData={online}></Lottie>
            </div>
          </div>
          <div className="">
            <RightSideNav></RightSideNav>
          </div>
        </div>
        <div className="">
          <h1 className="title text-center text-teal-600 font-bold text-4xl hover:text-teal-400">
            Choose your course and achieve your dream..
          </h1>
        </div>
        <div className="courses-container grid grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-3 gap-y-8 gap-x-6  mx-6 mb-24">
          {courses.map((data) => (
            <Course key={data.id} info={data}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
