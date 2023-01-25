import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import CreateTournamentScreen from "../screens/CreateTournamentScreen/CreateTournamentScreen";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [t] = useTranslation("common");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="CreateTournament"
          component={CreateTournamentScreen}
          options={{ title: t("create_tournament") as string }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
