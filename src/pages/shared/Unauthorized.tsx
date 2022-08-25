import React from "react";
import { NavLink } from "react-router-dom";

const Unauthorized: React.FC = () => {
  return (
    <>
      <div>You are not authorized</div>

      <NavLink to="/">Home</NavLink>
    </>
  );
};

export default Unauthorized;
