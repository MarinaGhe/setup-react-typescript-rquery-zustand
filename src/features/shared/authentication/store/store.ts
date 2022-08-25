import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from 'zustand/middleware'
import { RoleTypes, Role } from 'features/shared/authentication'

interface IAuthenticationState {
  role: Role
  setRole: (value: string) => void
  isLoggedIn: boolean
  setIsLoggedIn : (value:boolean) => void // update type
  resetAuthenticationStore: () => void
}

type Persistor = (
  config: StateCreator<IAuthenticationState>,                                            
  options: PersistOptions<IAuthenticationState>,                                       
) => StateCreator<IAuthenticationState>

const initialState={
  role:RoleTypes.guest,
  isLoggedIn: false
} as IAuthenticationState

// ! never use persist for the authentication store !
// this is only for testing puposes and type checking
// TODO: remove persist
export const useAuthenticationStore = create<IAuthenticationState>(
  (persist as unknown as Persistor)(
  (set) =>({
    ...initialState,

    setRole: (value) => {
      set(state => ({
        role: value
      }))
    },

    setIsLoggedIn: (value)=>{
      set(state => ({
        isLoggedIn: value
      }))
    },

    resetAuthenticationStore: () =>{
      set(initialState)
      localStorage.clear()
    }
  }),
  {
    name: "user"
  }
))
