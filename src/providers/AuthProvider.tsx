import { ReactNode, useEffect, useState } from "react";
import { AuthContext, UserProps } from "./contexts/AuthContext";

import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export interface AuthContextProviderProps {
	children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [user, setUser] = useState<UserProps>({} as UserProps);
	const [isUserLoading, setIsUserLoading] = useState(false);

	const [req, resp, promptAsync] = Google.useAuthRequest({
		clientId: "1088633628099-mvp1scs2g15jvgk9gqbhhaoiggp3rrk0.apps.googleusercontent.com",
		redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
		scopes: ["profile", "email"]
	});

	useEffect(() => {
		if (resp?.type === "success" && resp?.authentication?.accessToken) {
			signInWithGoogle(resp.authentication.accessToken);
		}
	}, [resp]);

	const signIn = async () => {
		try {
			setIsUserLoading(true);
			await promptAsync();
		} catch (err) {
			console.error(err);
			throw err;
		} finally {
			setIsUserLoading(false);
		}
	}

	const signInWithGoogle = async (accessToken: string) => {
		console.log(`Token de Autenticação: ${accessToken}`)
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isUserLoading,
				signIn,
			}}
		>
			{ children }
		</AuthContext.Provider>
	)
}