import React from "react";
import { useTranslation } from "react-i18next";
import { List } from "react-native-paper";

export default function CalculatorResult({
  currentRating,
  ratingChange,
}: {
  currentRating: number;
  ratingChange: number;
}) {
  const [t] = useTranslation("common");

  const listIcon = ratingChange >= 0 ? "happy" : "sad";

  return (
    <List.Section>
      <List.Item
        title={`${t("current_rating")}: ${currentRating}`}
        description={`${t("rating_change")}: ${ratingChange}`}
        left={(props) => <List.Icon {...props} icon={`emoticon-${listIcon}`} />}
      />
    </List.Section>
  );
}
