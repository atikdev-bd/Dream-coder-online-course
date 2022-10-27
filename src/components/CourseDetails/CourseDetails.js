import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "../../Assets/icon/icons8-pdf-file-format-64.png";
import CoursePDF from "../../Assets/Approach_to_Programming_Language_Education.pdf";
import RightSideNav from "../RightSideNav/RightSideNav";
import "./CourseDetails.css";

const CourseDetails = () => {
  const details = useLoaderData();
  const { title, img, id, name,} = details;
  return (
    <div className="course-container">
      <div className="card lg:card-side bg-base-100 mx-4 my-4 shadow-xl">
        <figure>
          <img className=" h-[300px] lg:w-[800px] lg:h-[500px]" src={img} alt="" />
        </figure>
        <div className="card-body mt-0 h-[300px] lg:h-[500px] bg-slate-400">
          <h2 className="card-title">{name}</h2>
          <p className="overflow-auto">{title}</p>
          <div className="card-actions justify-between">
            <a href={CoursePDF}>
              {" "}
              <div className="bg-gray-700 p-2 w-12 lg:w-full rounded-md hover:bg-green-700">
                <img src={Pdf} alt="" />
              </div>
            </a>
            <Link to={`/check/${id}`}>
              <button className="btn btn-primary   w-30 lg:w-full">Get Premium Access</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default CourseDetails;
