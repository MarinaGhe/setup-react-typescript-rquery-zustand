import React from "react";
import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div>404 This page was not found</div> <NavLink to="/">Home</NavLink>
    </>
  );
};

export default NotFound;
