import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const Context = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /// create user with email and password //
  const createUserEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /// signIn user with email and password ///
  const loginUserWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /// login with google pop up ///
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  ///login with github ///
  const githubLogin = () => {
    return signInWithPopup(auth, gitProvider);
  };

  ///sign out ////
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  ///update profile ///
  const userUpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  ///onAuthStateChanged with firebase///
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const data = {
    createUserEmailAndPassword,
    loginUserWithEmailAndPassword,
    googleLogin,
    user,
    logOut,
    loading,
    setError,
    githubLogin,
    userUpdateProfile,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default Context;
