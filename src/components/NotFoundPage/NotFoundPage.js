import React from "react";
import NotFound from "../../Assets/icon/icons8-coin-error-64.png";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <img className="w-30" src={NotFound} alt="" />
      <h1 className="text-red-600 font-bold">404 Page not Found</h1>
    </div>
  );
};

export default NotFoundPage;
