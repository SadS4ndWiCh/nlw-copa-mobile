import { useContext } from "react";
import { AuthContext, AuthContextDataProps } from "../providers/contexts/AuthContext";

export const useAuth = (): AuthContextDataProps => useContext(AuthContext);