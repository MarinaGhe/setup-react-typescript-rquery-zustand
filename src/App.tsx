import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { APP_ROUTES } from "tools/constants/routes";
import { RoleTypes } from "features/shared/authentication";

import Layout from "layout/Layout";
import UnprotectedRoute from "components/UnprotectedRoute";
import ProtectedRoute from "components/ProtectedRoute";
import Login from "pages/shared/Login";
import Home from "pages/shared/Home";
import Jobs from "pages/cadidate/Jobs";
import Unauthorized from "pages/shared/Unauthorized";
import NotFound from "pages/shared/NotFound";
import Data from "pages/company/Data";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* unprotected pages */}
      <Route element={<UnprotectedRoute />}>
        <Route path={APP_ROUTES.login} element={<Login />} />
      </Route>

      {/* protected pages */}
      <Route element={<Layout showLeftMenu />}>
        <Route
          path={APP_ROUTES.home}
          element={
            <ProtectedRoute
              allowedRoles={[RoleTypes.company, RoleTypes.candidate]}
            >
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path={APP_ROUTES.jobs}
          element={
            <ProtectedRoute allowedRoles={[RoleTypes.candidate]}>
              <Jobs />
            </ProtectedRoute>
          }
        />

        <Route
          path={APP_ROUTES.data}
          element={
            <ProtectedRoute allowedRoles={[RoleTypes.company]}>
              <Data />
            </ProtectedRoute>
          }
        />

        {/* fallback pages */}
        <Route path={APP_ROUTES.notFound} element={<NotFound />} />

        <Route path={APP_ROUTES.unauthorized} element={<Unauthorized />} />

        {/* 404 redirect */}
        <Route
          path="*"
          element={<Navigate replace to={APP_ROUTES.notFound} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
