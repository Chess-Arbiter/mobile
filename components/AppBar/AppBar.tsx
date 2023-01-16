import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Appbar } from "react-native-paper";

export default function CustomAppBar({}: BottomTabHeaderProps) {
  return (
    <Appbar.Header>
      {/* {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null} */}
      <Appbar.Content title="sda" />
    </Appbar.Header>
  );
}
