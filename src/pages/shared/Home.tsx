import React from "react";
import { useTranslation } from "react-i18next";
import { useUserData } from "hooks/useUserData";
import { useUserType } from "hooks/useUserType";

//TODO: switch display by role
const Home: React.FC = () => {
  const { t } = useTranslation();
  const { isGuest, isCandidate } = useUserType();
  const currentUser = useUserData();

  return (
    <>
      {isGuest && <div>{t("page.user.default")}</div>}

      {currentUser.error && <div>Error</div>}

      {currentUser.isLoading && <div>Loading...</div>}

      {isCandidate && currentUser.data?.name && (
        <>
          <div>{t("page.home")}</div>
          {currentUser.data?.name}
        </>
      )}
    </>
  );
};

export default Home;
