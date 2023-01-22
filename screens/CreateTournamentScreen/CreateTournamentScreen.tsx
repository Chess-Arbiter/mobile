import React from "react";
import { View } from "react-native";
import { Button, HelperText } from "react-native-paper";
import { z } from "zod";

import styles from "./CreateTournament.styles";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import useForm from "../../hooks/useForm";
import { getCreateTournamentScheme } from "../../util/validators";
import { useTranslation } from "react-i18next";
import { createTournament } from "../../data/api";

const KValues = [10, 15, 20, 30, 40].map((value) => ({
  value,
  label: String(value),
}));

export default function CreateTournamentScreen({ navigation }) {
  const [t] = useTranslation("common");
  const { handleChange, values, handleSubmit, errors } = useForm<
    typeof getCreateTournamentScheme,
    z.infer<typeof getCreateTournamentScheme>
  >({
    initialValues: { k_value: KValues[0].value },
    onSubmit: async (values: any) => {
      await createTournament(values);

      navigation.navigate("Tournaments", values);
    },
    getValidationScheme: getCreateTournamentScheme,
  });

  return (
    <View style={styles.container}>
      <Input
        style={styles.formGroup}
        name="name"
        label="Name"
        value={values.name}
        handleChange={handleChange}
        error={errors.name}
      />
      <Input
        style={styles.formGroup}
        keyboardType="numeric"
        type="number"
        label="Your Rautubg"
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
      <Button
        onPress={handleSubmit}
        style={styles.submitButton}
        buttonColor="red"
      >
        Save
      </Button>
    </View>
  );
}
