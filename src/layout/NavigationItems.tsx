import React from "react";
import { NavLink } from "react-router-dom";
import { MENU_ROUTES_CANDIDATE } from "tools/constants/routes";

const NavigationItems: React.FC = () => {
  //TODO: switch menu routes by role candidate/company

  return (
    <nav>
      {MENU_ROUTES_CANDIDATE.map((route, i) => (
        <div key={i}>
          <NavLink
            to={route.path}
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline", color: "red" } : {}
            }
          >
            {route.name}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default NavigationItems;
