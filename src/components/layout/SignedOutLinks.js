import React from "react";
import { Link, NavLink } from "react-router-dom";

const SignedOutLink = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">SignUp</NavLink>>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>>
      </li>
    </ul>
  );
};

export default SignedOutLink;
