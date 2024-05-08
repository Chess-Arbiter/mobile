import React from "react";
import { View } from "react-native";
import { HelperText } from "react-native-paper";
import styles from "./CreateTournament.styles";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import useForm from "../../hooks/useForm";
import { getCreateTournamentScheme } from "../../util/validators";
import { useTranslation } from "react-i18next";
import { createTournament } from "../../data/api";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const KValues = [10, 15, 20, 30, 40].map((value) => ({
  value,
  label: String(value),
}));

export default function CreateTournamentScreen({
  navigation,
}: {
  navigation: any;
}) {
  const [t] = useTranslation("common");
  const { handleChange, values, handleSubmit, errors } = useForm<any, any>({
    initialValues: { k_value: KValues[0].value },
    onSubmit: async (values: {
      name: string;
      rating: number;
      k_value: number;
    }) => {
      await createTournament(values);

      navigation.navigate("Tournaments", values);
    },
    getValidationScheme: getCreateTournamentScheme,
  });

  const tournamentName = t("tournament_name");
  const yourRating = t("your_rating");

  return (
    <View style={styles.container}>
      <Input
        style={styles.formGroup}
        name="name"
        label={tournamentName}
        value={values.name}
        handleChange={handleChange}
        error={errors.name}
      />
      <Input
        style={styles.formGroup}
        keyboardType="numeric"
        type="number"
        label={yourRating}
        name="rating"
        handleChange={handleChange}
        value={values.rating}
        error={errors.rating}
      />
      <View style={styles.formGroup}>
        <Select
          options={KValues}
          onChange={handleChange}
          name="k_value"
          value={values.k_value}
        />
        <HelperText type="info" visible>
          {t("k_description")}
        </HelperText>
      </View>
      <PrimaryButton onPress={handleSubmit} style={styles.submitButton}>
        {t("create_tournament")}
      </PrimaryButton>
    </View>
  );
}
