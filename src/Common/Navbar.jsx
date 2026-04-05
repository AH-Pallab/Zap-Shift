import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const list = (
    <>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/send-percel">Send Percel</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/tracking">Tracking</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black-8"
          >
            {list}
            <li>
              {user ? (
                <button>Sign Out</button>
              ) : (
                <NavLink to="/signin">Sign in</NavLink>
              )}
            </li>
            <li>
              <NavLink>Be a Rider</NavLink>
            </li>
          </ul>
        </div>
        {/* LOGO */}
        <Link to="/" className="hidden lg:block relative">
          <img src={logo} alt="" className="h-10" />
          <h3 className="text-black-12 font-extrabold text-2xl absolute left-4 top-[15px]">
            ZapShift
          </h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black-8">{list}</ul>
      </div>
      <div className="navbar-end space-x-2 hidden sm:flex ">
        {user ? (
          <button
            onClick={logOut}
            className="btn text-black-8 font-bold bg-white"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/signin" className="btn text-black-8 font-bold bg-white">
            Sign In
          </Link>
        )}
        <Link className="btn text-black-12 bg-primary border-none">
          Be a rider
        </Link>
        <button className="rounded-full bg-black-12 text-primary p-3 -rotate-45">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
