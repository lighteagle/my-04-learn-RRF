import React from "react";
import { Link, NavLink } from "react-router-dom";

const SignedInLink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue  darken-1">
          SAS
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLink;
