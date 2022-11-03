import {
	Button as ButtonNativeBase,
	IButtonProps,
	Text,
} from "native-base";

interface Props extends IButtonProps {
	title: string;
	type?: "primary" | "secundary";
}

export const Button = ({ title, type="primary", ...rest }: Props) => {
	return (
		<ButtonNativeBase
			w="full"
			h={14}
			rounded="sm"
			fontSize="md"
			bg={type === "secundary" ? "red.500" : "yellow.500"}
			_pressed={{
				bg: type === "secundary" ? "red.400" : "yellow.600"
			}}
			_loading={{
				_spinner: { color: "black" }
			}}
			{...rest}
		>
			<Text
				fontSize="sm"
				fontFamily="heading"
				textTransform="uppercase"
				color={type === "secundary" ? "white" : "black"}
			>
				{ title }
			</Text>
		</ButtonNativeBase>
	)
}