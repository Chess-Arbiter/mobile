import React from "react";
import { useTranslation } from "react-i18next";
import { List } from "react-native-paper";

export default function CalculatorResult({
  currentRaiting,
  raitingChange,
}: any) {
  const [t] = useTranslation("common");

  const listIcon = raitingChange >= 0 ? "happy" : "sad";

  return (
    <List.Section>
      <List.Item
        title={`${t("current_rating")}: ${currentRaiting}`}
        description={`${t("rating_change")}: ${raitingChange}`}
        left={(props) => <List.Icon {...props} icon={`emoticon-${listIcon}`} />}
      />
    </List.Section>
  );
}
