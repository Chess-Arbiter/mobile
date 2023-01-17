import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";

import Colors from "../constants/Colors";
import HandbookScreen from "../screens/HandbookScreen/HandbookScreen";
import TournamentsScreen from "../screens/TournamentsScreen/TournamentsScreen";
import { RootTabParamList, RootTabScreenProps } from "../types";
import TabBarIcon from "../components/TabIcon/TabIcon";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Handbook">
      <BottomTab.Screen
        name="Handbook"
        component={HandbookScreen}
        options={({ navigation }: RootTabScreenProps<"Handbook">) => ({
          title: "Handbook",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("CreateTournament")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Tournaments"
        component={TournamentsScreen}
        options={{
          title: "Tournaments",
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
