import { RoleTypes } from 'features/shared/authentication'
import { useAuthenticationStore } from 'features/shared/authentication'

export const useUserType = () => {
  const role = useAuthenticationStore(state => state.role)
  const isLoggedIn = useAuthenticationStore(state => state.isLoggedIn)

  const isCandidate = isLoggedIn && role === RoleTypes.candidate
  const isCompany = isLoggedIn && role === RoleTypes.company
  const isGuest = !isLoggedIn ||
    (role === RoleTypes.guest) || 
    (role !== RoleTypes.company && role !== RoleTypes.candidate)

  return { isGuest, isCandidate, isCompany }
}