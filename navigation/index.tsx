import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import RootNavigator from "./RootNavigator";
import { CombinedDarkTheme, CombinedDefaultTheme } from "../theme/theme";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
