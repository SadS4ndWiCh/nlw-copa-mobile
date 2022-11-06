import { StatusBar } from "native-base";

import { AppProviders } from "./src/providers";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <AppProviders>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
    </AppProviders>
  );
}