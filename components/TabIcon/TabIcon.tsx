import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginTop: 4 }} {...props} />;
}
