import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
function Navbar() {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signin">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;