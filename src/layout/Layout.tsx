import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavigationItems from "./NavigationItems";
import i18n, { availableLanguages } from "lib/i18n/i18n";
import { useAuthenticationStore } from "features/shared/authentication";

interface Props {
  children?: React.ReactNode;
  showLeftMenu?: boolean;
}

const Layout: React.FC<Props> = ({ children, showLeftMenu }) => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthenticationStore((state) => state.isLoggedIn);
  const resetAuthenticationStore = useAuthenticationStore(
    (state) => state.resetAuthenticationStore
  );

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  // do your logic here
  // update the authentication store also
  const handleLogout = () => {
    resetAuthenticationStore();
    navigate("/login", { replace: true });
  };

  // do your logic here
  const handleLogin = () => {
    navigate("/login");
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      handleLogin();
    }
  };

  return (
    <>
      {showLeftMenu && <NavigationItems />}

      <br></br>

      <Outlet />

      <br></br>

      {/* for testing language switching */}
      <select onChange={handleLanguageChange}>
        {availableLanguages.map((language, idx) => (
          <option key={idx} value={language}>
            {language}
          </option>
        ))}
      </select>

      <br></br>
      <br></br>

      <button onClick={handleButtonClick}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
};

Layout.defaultProps = {
  showLeftMenu: false,
  children: null,
};

export default Layout;
