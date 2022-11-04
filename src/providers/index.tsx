import { ReactNode } from "react";
import { NativeBaseProvider } from "native-base";

import { FontsProvider } from "./FontsProvider";
import { AuthContextProvider } from "./AuthProvider";

import { THEME } from "../styles/theme";

type Props = {
	children: ReactNode;
};

export const AppProviders = ({ children }: Props) => {
	return (
		<NativeBaseProvider theme={THEME}>
			<FontsProvider>
				<AuthContextProvider>
					{ children }
				</AuthContextProvider>
			</FontsProvider>
		</NativeBaseProvider>
	)
}