import React, { createContext } from 'react';

 export const AuthContext = createContext()

const Context = ({children}) => {

    const data = {}


    return (
        <AuthContext.Provider value ={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;