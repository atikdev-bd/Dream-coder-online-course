import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileIcon from "../../Assets/icon/profileIcon.png";
import { AuthContext } from "../../context/Context";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const userSignOut = ()=>{
    logOut().then(result =>{

    }).catch(error => console.error(error))
  }
  console.log(user);
  return (
    <div className="navbar bg-base-300 px-8">
      <div className="flex-1">
        <Link className="btn  btn-ghost normal-case text-xl">
          DREAM COURSES
        </Link>
        <p>{user?.email}</p>
      </div>
      <div className="flex-none">
        <div className="mr-8">
          {user && user?.uid ? (
            <div className="flex items-center">
              <Link className="mr-4 font-bold" to="home">
                Home
              </Link>
              <Link className="mr-4 font-bold" to="blog">
                Blog
              </Link>
              <Link className="mr-4 font-bold" to="about">
                About
              </Link>
             <Link title="Click to sign out" to='/home'>
                {" "}
                <FaSignOutAlt onClick={userSignOut}  className="text-gray-900 ml-2 hover:text-red-500"></FaSignOutAlt>{" "}
              </Link>
            </div>
          ) : (
            <>
              <Link className="mr-4 font-bold" to="home">
                Home
              </Link>
              <Link className="mr-4 font-bold" to="blog">
                Blog
              </Link>
              <Link className="mr-4 font-bold" to="about">
                About
              </Link>
              <Link className="mr-4 font-bold" to="register">
                Register
              </Link>
              <Link className="mr-4 font-bold" to="login">
                Login
              </Link>
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
            <li>
              <Link>Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
