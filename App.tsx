import React from "react";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { ShipmentsProvider } from "./src/context/ShipmentsContext";

export default function App() {
  return (
    <ShipmentsProvider>
      <RootNavigator />
    </ShipmentsProvider>
  );
}
