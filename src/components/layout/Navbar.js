import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLinks";
import SignedOutLink from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue light">
      <div className="container">
        <Link to="/" className="brand-logo">
          Bogalakon
        </Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
};

export default Navbar;
