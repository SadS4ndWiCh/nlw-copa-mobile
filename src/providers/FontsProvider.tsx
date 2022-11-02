import { ReactNode } from "react";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { Loading } from "../components/Loading";

type Props = {
	children: ReactNode;
};
export const FontsProvider = ({ children }: Props) => {
	const [isFontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

	return (
		<>
			{ isFontsLoaded ? children : <Loading/> }
		</>
	)
}