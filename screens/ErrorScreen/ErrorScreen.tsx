import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";

export default function ErrorScreen() {
  const [t] = useTranslation("common");
  const theme = useTheme<{
    colors: { info: string; error: string; primary: string };
  }>();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View>
        <IconButton iconColor={theme.colors.error} icon="alert-circle" />
      </View>
      <Text
        style={{
          fontWeight: "700",
          maxWidth: 250,
          textAlign: "center",
          fontSize: 16,
          color: theme.colors.info,
        }}
      >
        {t("error_message")}
      </Text>
      <Text
        style={{
          marginTop: 20,
          fontWeight: "900",
          color: theme.colors.primary,
        }}
      >
        cbessarbiter.info@gmail.com
      </Text>
    </View>
  );
}
