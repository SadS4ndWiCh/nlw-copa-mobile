import { StatusBar } from "native-base";

import { AppProviders } from "./src/providers";
import { Pools } from "./src/screens/Pools";

export default function App() {
  return (
    <AppProviders>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Pools />
    </AppProviders>
  );
}