import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { validateUserPermisssions } from "../utils/validateUserPermissions";

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
}

export function useCan({ permissions = [], roles = [] }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if(!isAuthenticated) return false;
  
  const userHasValidPermissions = validateUserPermisssions({ 
    user, 
    permissions, 
    roles 
  });

  return userHasValidPermissions;
}