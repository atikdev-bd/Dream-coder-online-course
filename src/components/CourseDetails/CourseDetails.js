import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  const { title, img, id, name, price } = details;
  return (
    <div className="card lg:card-side bg-base-100 mx-8 mt-4 shadow-xl">
      <figure>
        <img className="lg:w-[600px] lg:h-[500px]" src={img} alt="Album" />
      </figure>
      <div className="card-body overflow-hidden lg:h-[500px] bg-slate-400">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          <Link to={`/check/${id}`}>
            <button className="btn btn-primary">Get Premium Assess</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
