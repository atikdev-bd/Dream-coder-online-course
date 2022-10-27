import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Header></Header>

      <div className="row-container">
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
