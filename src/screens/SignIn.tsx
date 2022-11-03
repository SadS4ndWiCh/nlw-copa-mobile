import { Center, Text, Icon }  from "native-base";
import { Fontisto } from "@expo/vector-icons";

import Logo from '../assets/logo.svg';

import { Button } from "../components/Button";

export const SignIn = () => {
	return (
		<Center flex={1} bg="gray.900" p={7}>
			<Logo width={212} height={40} />

			<Button
				title="SignIn With Google"
				type="secundary"
				leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
				mt={12}
			/>

			<Text
				color="white"
				textAlign="center"
				mt={4}
			>
				Não utilizamos informações além {'\n'}
				do seu e-mail para a criação de sua conta
			</Text>
		</Center>
	)
}