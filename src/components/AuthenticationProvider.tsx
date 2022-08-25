import { useQuery } from "react-query";
import {
  refresh,
  RoleTypes,
  useAuthenticationStore,
} from "features/shared/authentication";

interface Props {
  children: React.ReactNode;
}

const AuthenticationProvider: FCC<Props> = ({ children }) => {
  const setRole = useAuthenticationStore((state) => state.setRole);
  const setIsLoggedIn = useAuthenticationStore((state) => state.setIsLoggedIn);

  const { isLoading } = useQuery("refresh", refresh, {
    onSuccess: (data: any) => {
      // update authentication data each time we refresh token/refresh page
      // this is mandatory in order to persist login
      // setRole(data?.role);
      // setIsLoggedIn(Boolean(data?.token) && Boolean(data?.token.length));
    },
    onError: (err) => {
      // handle error if needed
      setRole(RoleTypes.guest);
      setIsLoggedIn(false);
      console.warn(err);
    },
    staleTime: 1000 * 60 * 60 * 24, // stale data 24 hours or untill page refresh
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });

  return (
    <>{isLoading ? <div>Loading and refresh token...</div> : <>{children}</>}</>
  );
};

export default AuthenticationProvider;
