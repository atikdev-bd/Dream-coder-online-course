import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';

 export const AuthContext = createContext()

 const auth = getAuth(app)

const Context = ({children}) => {

    const createUserEmailAndPassword =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const data = {createUserEmailAndPassword}


    return (
        <AuthContext.Provider value ={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;