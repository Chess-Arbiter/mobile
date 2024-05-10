import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HandbookScreen from "../screens/HandbookScreen/HandbookScreen";
import TournamentsScreen from "../screens/TournamentsScreen/TournamentsScreen";
import TournamentScreen from "../screens/TournamentScreen/TournamentScreen";
import { RootTabParamList } from "../types";
import TabBarIcon from "../components/TabIcon/TabIcon";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalculatorScreen from "../screens/CalculatorScreen/CalculatorScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator();

function Tournaments() {
  return (
    <Stack.Navigator initialRouteName="TournamentsList">
      <Stack.Screen
        name="TournamentsList"
        component={TournamentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tournament"
        component={TournamentScreen}
        options={({ route }: { route: any }) => ({
          title: route.params?.name as string,
        })}
      />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Handbook">
      <BottomTab.Screen
        name="Handbook"
        component={HandbookScreen}
        options={() => ({
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Tournaments"
        component={Tournaments}
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calculator" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
