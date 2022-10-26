import { current } from "daisyui/src/colors";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const Context = ({ children }) => {
   

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(true)
  const [error , setError] = useState('')

  /// create user with email and password //
  const createUserEmailAndPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /// signIn user with email and password ///
  const loginUserWithEmailAndPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  /// login with google pop up ///
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  ///sign out ////
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  ///onAuthStateChanged with firebase///
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser)
       setLoading(false)
  })

  return ()=>{
       unsubscribe()
  }

  },[])

  const data = {
    createUserEmailAndPassword,
    loginUserWithEmailAndPassword,
    googleLogin,
    user,
    logOut,
    loading,
    setError
    
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default Context;
