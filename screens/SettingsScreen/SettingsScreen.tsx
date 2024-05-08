import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Divider, Switch, Text } from "react-native-paper";
import OptionButtons from "../../components/OptionButtons/OptionButtons";
import { useAppContext } from "../../context/AppContext";
import { LANGUAGES } from "../../data/constants";
import { FormValue } from "../../models/global";

export default function SettingsScreen() {
  const [t] = useTranslation("common");
  const { settings, changeSettings, colorScheme } = useAppContext();

  function handleChange(name: string, value: FormValue) {
    changeSettings(name, value as string);
  }
  function handleToggleTheme() {
    handleChange("theme", settings.theme === "dark" ? "light" : "dark");
  }
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 16,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700" }}>{t("language")}</Text>
        <OptionButtons
          style={{ flex: 1, paddingLeft: 16 }}
          value={settings.lang}
          options={LANGUAGES}
          name="lang"
          onChange={handleChange}
        />
      </View>
      <Divider />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 16,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700" }}>Dark Mode</Text>
        <Switch
          value={colorScheme === "dark"}
          style={{ paddingLeft: 16 }}
          onChange={handleToggleTheme}
        />
      </View>
      <Divider />
    </View>
  );
}
