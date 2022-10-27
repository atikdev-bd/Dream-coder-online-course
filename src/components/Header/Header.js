import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import TitleIcon from "../../Assets/icon/icons8-programming-flag-50.png";
import ProfileIcon from "../../Assets/icon/profileIcon.png";
import { AuthContext } from "../../context/Context";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  const userSignOut = () => {
    logOut()
      .then((result) => {
        toast.success("Sign out successfully");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleToggle = (e) => {
    const value = e.target.checked;
    setToggle(value);
  };
  return (
    <div className="navbar bg-base-300 lg:px-8">
      <div className="flex-1">
        <Toaster></Toaster>
        <img src={TitleIcon} alt="" />
        <Link
          to="/home"
          className="lg:text-xl font-bold ml-2 hover:text-emerald-600"
        >
          <span className="text-2xl lg:text-3xl text-orange-500">D</span>REAM
          COURSES
        </Link>
        <input
          onClick={handleToggle}
          type="checkbox"
          name="toggleBar"
          className="toggle h-5 mr-2 ml-2 lg:mr-2 lg:ml-4"
        />
        {toggle === false ? (
          <span className="text-stone-400 mr-4 font-bold">Light</span>
        ) : (
          <span className="text-black font-semibold">Dark</span>
        )}
      </div>
      <div className="header-container">
        <div className="lg:mr-8 flex items-center ">
          {user && user?.uid ? (
            <div className="flex items-center">
              <div className="hidden lg:block md:block">
                <Link className="mr-4 font-bold" to="home">
                  Courses
                </Link>
                <Link className="mr-4 font-bold" to="/">
                  FAQ
                </Link>
                <Link className="mr-4 font-bold" to="blogs">
                  Blogs
                </Link>
              </div>
              <Link title="Click to sign out" to="/home">
                {" "}
                <FaSignOutAlt
                  onClick={userSignOut}
                  className="text-gray-900 ml-2 mr-4 hover:text-red-500"
                ></FaSignOutAlt>{" "}
              </Link>
            </div>
          ) : (
            <>
              <div className="hidden lg:block">
                <Link className="mr-4 font-bold" to="home">
                  Courses
                </Link>
                <Link className="mr-4 font-bold" to="blogs">
                  Blogs
                </Link>
              </div>
              <div className="hidden lg:block">
                <Link className="mr-4 font-bold" to="about">
                  FAQ
                </Link>
                <Link className="mr-4 font-bold" to="register">
                  Register
                </Link>
                <Link className="mr-4 font-bold" to="login">
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div
              title={user?.displayName ? user?.displayName : "No name found"}
              className="w-10 rounded-full"
            >
              {user && user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src={ProfileIcon} alt="" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <div className="lg:hidden">
              {user && user?.uid ? (
                <>
                  <li>
                    <Link to="about">FAQ</Link>
                  </li>
                  <li>
                    <Link to="blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="home">Courses</Link>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <Link to="blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="home">Courses</Link>
                  </li>
                  <li>
                    <Link to="register">Register</Link>
                  </li>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
