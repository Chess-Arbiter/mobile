import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import RootNavigator from "./RootNavigator";
import { CombinedDarkTheme, CombinedDefaultTheme } from "../theme/theme";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
