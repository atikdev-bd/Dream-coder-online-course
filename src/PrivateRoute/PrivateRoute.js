import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Context';
import Lottie from "lottie-react";
import Loader  from '../Assets/loading.json'

const PrivateRoute = ({children}) => {
     const location = useLocation();
    const { user , loading} = useContext(AuthContext);
    if(loading){
      return <div className='flex justify-center items-center mt-14'>
          <h1>
          <Lottie animationData={Loader}></Lottie>
          </h1>

      </div>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivateRoute;