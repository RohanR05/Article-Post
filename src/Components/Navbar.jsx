import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import ThemeToggle from "../Theme/Theme";
import Logo from "./Logo";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You Logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li className=" text-[17px]">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className=" text-[17px]">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to={"/allArticles"}
        >
          All Articles
        </NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li className=" text-[17px]">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to={"/myArticles"}
            >
              My Articles
            </NavLink>
          </li>
          <li className="text-[17px]">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to={"/postArticles"}
            >
              Post Article
            </NavLink>
          </li>
        </>
      )}
      <li className="text-[17px]">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to={"/postAbout"}
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div class="relative z-50">
      <div className="navbar bg-accent text-primary font-semibold fixed top-0 right-0 left-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content dark:bg-black dark:text-[#e2e9d7] bg-base-100 text-[#00333b] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle></ThemeToggle>
          <div className="">
            {" "}
            {user ? (
              <div className="flex gap-5 items-center">
                <button
                  onClick={handleLogOut}
                  className=" btn btn-secondary btn-outline"
                >
                  Log Out
                </button>
                <img
                  className="w-12 h-12 rounded-2xl hidden md:block"
                  src={user?.photoURL || "https://via.placeholder.com/150"}
                  alt="Profile"
                />
              </div>
            ) : (
              <NavLink
                to="/signIn"
                className={({ isActive }) =>
                  `btn btn-sm text-lg border-cyan-700 ${
                    isActive ? "bg-cyan-700 text-white" : "text-cyan-700"
                  }`
                }
              >
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
