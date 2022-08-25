import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  login,
  findUser,
  useAuthenticationStore,
} from "features/shared/authentication";
import { APP_ROUTES } from "tools/constants/routes";

// this page contains examples for multiple functionalities

const Login: React.FC = () => {
  const { t } = useTranslation();
  const setIsLoggedIn = useAuthenticationStore((state) => state.setIsLoggedIn);
  const setRole = useAuthenticationStore((state) => state.setRole);
  const isLoggedIn = useAuthenticationStore((state) => state.isLoggedIn);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // this is an example of live search using react-query
  // the username is used only for testing puposes

  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [username, setUsername] = useState<string>("");

  // const search = useDebounce(username, 500);
  // const queryUser = useQuery(
  //   ["find_user", search],
  //   ({ signal }) => findUser(search, signal),
  //   {
  //     onError: () => {
  //       setUsername("");
  //     },
  //     enabled: Boolean(username), // trigger the api call only when the user start's typing
  //   }
  // );

  // this is an example of creating custom url with search params
  // only for testing purpose
  const [searchParams, setSearchParams] = useSearchParams({
    user: "",
    email: "",
  });
  const [password, setPassword] = useState<string>("");

  const username = searchParams.get("user") || "";
  const email = searchParams.get("email") || "";

  const loginMutation = useMutation(login, {
    // TODO: update type for post response
    onSuccess: (data: any) => {
      setIsLoggedIn(Boolean(data.token) && Boolean(data.token.length));
      setRole(data.role);
      navigate(APP_ROUTES.home);

      // invalidates any initial stale 'user' query
      // and refetch data to update app with the logged in user
      queryClient.invalidateQueries("user");
    },
  });

  return (
    <>
      <div>{t("page.login")}</div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          searchParams.set("user", e.target.value);
          setSearchParams(searchParams);
        }}
        onBlur={() => queryClient.invalidateQueries("find_user")}
      />
      Username
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          searchParams.set("email", e.target.value);
          setSearchParams(searchParams);
        }}
      />
      Email
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      Pass
      <button
        onClick={() => {
          loginMutation.mutate({ username, email, password });
        }}
      >
        Fake login
      </button>
      {loginMutation.isLoading && <div>Some loading state here ...</div>}
    </>
  );
};

export default Login;
