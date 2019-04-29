import React from "react";
import { Link, NavLink } from "react-router-dom";

// component to display navigation bar where end-user will be able to find navigations to login page or back to landing page
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand=logo">
          iLink Test App
        </Link>
        <ul className="right">
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
