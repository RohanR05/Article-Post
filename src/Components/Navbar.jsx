import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import ThemeToggle from "../Theme/Theme";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faNewspaper,
  faPenNib,
  faSquarePlus,
  faCircleInfo,
  faRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("You Logged Out Successfully"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li className="text-primary font-bold flex items-center gap-2">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `flex items-center gap-2 transition ${isActive ? "underline" : ""}`
          }
        >
          <FontAwesomeIcon icon={faHouse} className="text-secondary" />
          Home
        </NavLink>
      </li>

      <li className="text-primary font-bold flex items-center gap-2">
        <NavLink
          to="/allArticles"
          className={({ isActive }) =>
            `flex items-center gap-2 transition ${isActive ? "underline" : ""}`
          }
        >
          <FontAwesomeIcon icon={faNewspaper} className="text-secondary" />
          All Articles
        </NavLink>
      </li>

      {user && (
        <>
          <li className="text-primary font-bold flex items-center gap-2">
            <NavLink
              to="/myArticles"
              className={({ isActive }) =>
                `flex items-center gap-2 transition ${
                  isActive ? "underline" : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faPenNib} className="text-secondary" />
              My Articles
            </NavLink>
          </li>

          <li className="text-primary font-bold flex items-center gap-2">
            <NavLink
              to="/postArticles"
              className={({ isActive }) =>
                `flex items-center gap-2 transition ${
                  isActive ? "underline" : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faSquarePlus} className="text-secondary" />
              Post Article
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="relative z-50">
      <div className="navbar fixed top-0 right-0 left-0 bg-base-100/50 backdrop-blur-md text-primary font-semibold shadow-md">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for Mobile */}
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral flex flex-col items-start rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Logo />
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-3">
          <ThemeToggle />

          {user ? (
            <div className="flex gap-3 items-center">
              <button
                onClick={handleLogOut}
                className="btn btn-sm md:btn-lg btn-outline btn-secondary"
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="" />
                Log Out
              </button>
              <img
                className="w-11 h-11 rounded-2xl hidden md:block"
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
              />
            </div>
          ) : (
            <NavLink
              to="/signIn"
              className={({ isActive }) =>
                `btn btn-sm md:btn-lg btn-outline btn-secondary ${
                  isActive ? "bg-secondary text-base-100" : ""
                }`
              }
            >
              <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
