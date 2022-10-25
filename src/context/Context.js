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

  /// create user with email and password //
  const createUserEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /// signIn user with email and password ///
  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /// login with google pop up ///
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  ///sign out ////
  const logOut = ()=>{
    return signOut(auth)
  }
  ///onAuthStateChanged with firebase///
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser)
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
    logOut 
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default Context;
