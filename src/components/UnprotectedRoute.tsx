import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticationStore } from "features/shared/authentication";
interface Props {}

const UnprotectedRoute: React.FC<Props> = () => {
  const isLoggedIn = useAuthenticationStore((state) => state.isLoggedIn);

  return (
    <>
      {isLoggedIn && <Navigate to="/" replace />}

      <Outlet />
    </>
  );
};

export default UnprotectedRoute;
