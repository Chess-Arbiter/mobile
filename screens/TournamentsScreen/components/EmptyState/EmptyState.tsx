import React from "react";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { EmptyStateProps } from "./EmptyState.types";
import styles from "./EmptyState.styles";

export default function EmptyState({ content }: EmptyStateProps) {
  return (
    <View style={styles.wrapper}>
      <View>
        <IconButton style={styles.icon} icon="trophy" />
      </View>
      {content}
    </View>
  );
}
