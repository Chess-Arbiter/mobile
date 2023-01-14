import React from "react";
import { Modal, View } from "react-native";
import { List } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../data/constants";
import { ELANGUAGES } from "../../models/global";
import styles from "./SelectLanguage.styles";
import { SelectLanguageProps } from "./SelectLanguage types";

export default function SelectLanguage({
  onSelect,
  open,
}: SelectLanguageProps) {
  const [t, i18n] = useTranslation("common");
  function handlePress(language: ELANGUAGES) {
    setTimeout(() => {
      i18n.changeLanguage(language);
    }, 1000);
    onSelect(language);
  }
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={open}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <List.Section>
          <List.Subheader>
            <List.Icon icon="flag" />
            Select language
          </List.Subheader>
          {LANGUAGES.map(({ label, value }) => (
            <List.Item
              onPress={() => handlePress(value)}
              key={value}
              title={label}
            />
          ))}
        </List.Section>
      </View>
    </Modal>
  );
}
