import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import RightSideNav from "../components/RightSideNav/RightSideNav";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Header></Header>

      <div className="row-container">
        <div>
          <Outlet></Outlet>
        </div>
        <div>
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </>
  );
};

export default Main;
