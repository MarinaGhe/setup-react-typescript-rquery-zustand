import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RoleTypes, Role } from "features/shared/authentication";
import { useAuthenticationStore } from "features/shared/authentication";

interface Props {
  allowedRoles?: Role[];
  children: React.ReactNode;
}

const ProtectedRoute: FCC<Props> = ({ children, allowedRoles }) => {
  const location = useLocation();
  const role = useAuthenticationStore((state) => state.role);
  const isLoggedIn = useAuthenticationStore((state) => state.isLoggedIn);
  const isAuthorized = (allowedRoles || []).indexOf(role) > -1;

  return (
    <>
      {isLoggedIn && !isAuthorized && (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
      )}

      {children}
    </>
  );
};

ProtectedRoute.defaultProps = {
  allowedRoles: [RoleTypes.guest],
};

export default ProtectedRoute;
