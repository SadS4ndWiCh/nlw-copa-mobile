import { ReactNode } from "react";
import { NativeBaseProvider } from "native-base";

import { FontsProvider } from "./FontsProvider";

import { THEME } from "../styles/theme";

type Props = {
	children: ReactNode;
};

export const AppProviders = ({ children }: Props) => {
	return (
		<NativeBaseProvider theme={THEME}>
			<FontsProvider>
				{ children }
			</FontsProvider>
		</NativeBaseProvider>
	)
}