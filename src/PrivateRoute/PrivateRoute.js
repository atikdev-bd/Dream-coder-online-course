import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Context';

const PrivateRoute = ({children}) => {
     const location = useLocation();
    const { user , loading} = useContext(AuthContext);
    if(loading){
      return <>loading....</>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivateRoute;