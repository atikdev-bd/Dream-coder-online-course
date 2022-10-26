import React, { useContext, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileIcon from "../../Assets/icon/profileIcon.png";
import TitleIcon from '../../Assets/icon/icons8-programming-flag-50.png'
import { AuthContext } from "../../context/Context";
import './Header.css'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true)

  const userSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  const handleToggle = (e)=>{
    const value = e.target.checked
    setToggle(value)
    console.log(value);

  }
  return (
    <div className="navbar bg-base-300 lg:px-8">
      <div className="flex-1">
        <img src={TitleIcon} alt="" />
        <Link className="lg:text-xl font-bold ml-2 hover:text-emerald-600">
         <span className="text-2xl lg:text-3xl text-orange-500">D</span>REAM COURSES
        </Link>
        <input onClick={handleToggle}  type="checkbox" name="toggleBar" className="toggle mr-2 ml-4" />
        {
          toggle === false ? <span className="text-stone-400 font-bold">Light</span> : <span className="text-black font-semibold">dark</span>
        }
      </div>
      <div className="header-container">
        <div className="lg:mr-8 flex items-center ">
        
          {user && user?.uid ? (
            <div className="flex items-center">
              
              <Link className="mr-4 font-bold" to="home">
                Courses
              </Link>
              <Link className="mr-4 font-bold" to="blogs">
                Blogs
              </Link>
              <Link className="mr-4 font-bold" to="about">
                About
              </Link>
              <Link title="Click to sign out" to="/home">
                {" "}
                <FaSignOutAlt
                  onClick={userSignOut}
                  className="text-gray-900 ml-2 hover:text-red-500"
                ></FaSignOutAlt>{" "}
              </Link>
            </div>
          ) : (
            <>
              <Link className="mr-4 font-bold" to="home">
                Courses
              </Link>
              <Link className="mr-4 font-bold" to="blogs">
                Blogs
              </Link>
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
            <li>
              <Link to='about'>FAQ</Link>
            </li>
            <li>
              <Link to='register'>Register</Link>
            </li>
            <li>
              <Link to='login'>Login</Link>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
