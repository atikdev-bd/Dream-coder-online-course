import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from '../../Assets/icon/icons8-pdf-file-format-64.png'

const CourseDetails = () => {
  const details = useLoaderData();
  const { title, img, id, name, price } = details;
  return (
    <div className="card lg:card-side bg-base-100 mx-8 my-4 shadow-xl">
      <figure>
        <img className="lg:w-[800px] lg:h-[500px]" src={img} alt="Album" />
      </figure>
      <div className="card-body h-80 lg:h-[500px] bg-slate-400">
        <h2 className="card-title">{name}</h2>
        <p className="overflow-auto">{title}</p>
        <div className="card-actions justify-between">
          <div>
            <img className="bg-gray-700 p-2 rounded-md hover:bg-green-700" src={Pdf} alt="" />
            <p>Download</p>
          </div>
          <Link to={`/check/${id}`}>
            <button className="btn btn-primary">Get Premium Assess</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
