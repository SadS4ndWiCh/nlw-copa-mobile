import { StatusBar } from "native-base";

import { AppProviders } from "./src/providers";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  return (
    <AppProviders>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </AppProviders>
  );
}