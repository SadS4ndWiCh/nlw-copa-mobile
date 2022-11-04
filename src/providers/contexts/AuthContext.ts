import { createContext, ReactNode } from "react";

export interface UserProps {
	name: string;
	avatarUrl: string;
};

export interface AuthContextDataProps {
	user: UserProps;
	isUserLoading: boolean;
	signIn: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextDataProps);

