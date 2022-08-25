import { useQuery } from "react-query"
import { AxiosError } from "axios"
import { getUser, IUser, useAuthenticationStore } from "features/shared/authentication"

export const useUserData = () => {
  const isLoggedIn = useAuthenticationStore(state => state.isLoggedIn)

  return useQuery<IUser, AxiosError>('user', getUser, {
    //set some user details in the authentication store
    onSuccess: (data:IUser) =>{  }, 

    //retry only if the error code is not in the 400 range
    retry: (count, error) => (`${error?.response?.status}`.indexOf('4') === -1), 

    refetchInterval: 0,
    
    // refetch in the background every 8 hours
    // change if needed
    staleTime: 1000 * 60 * 60 * 8,

    enabled: isLoggedIn
  })
}