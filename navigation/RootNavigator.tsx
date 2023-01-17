import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import CreateTournamentScreen from "../screens/CreateTournamentScreen/CreateTournamentScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
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
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
