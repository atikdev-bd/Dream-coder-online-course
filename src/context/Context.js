import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';

 export const AuthContext = createContext()

 const auth = getAuth(app)

const Context = ({children}) => {

    const data = {}


    return (
        <AuthContext.Provider value ={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;