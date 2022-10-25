import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const Context = ({ children }) => {
  const provider = new GoogleAuthProvider();

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
  ///onAuthStateChanged with firebase///

  const data = {
    createUserEmailAndPassword,
    loginUserWithEmailAndPassword,
    googleLogin,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default Context;
