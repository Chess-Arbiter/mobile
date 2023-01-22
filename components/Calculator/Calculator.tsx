import React from "react";
import { View } from "react-native";
import { Button, HelperText } from "react-native-paper";
import { z } from "zod";

import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import useForm from "../../hooks/useForm";
import {
  CalculatorSchemeType,
  getCalculatorScheme,
  getCreateTournamentScheme,
} from "../../util/validators";
import { useTranslation } from "react-i18next";
import { createTournament } from "../../data/api";
import styles from "./CreateTournament.styles";
import OptionButtons from "../OptionButtons/OptionButtons";
import { CalculationResult } from "../../models/tournaments";
import { calculateRaiting } from "../../util/helpers";

const KValues = [10, 15, 20, 30, 40].map((value) => ({
  value,
  label: String(value),
}));

export default function Calculator({
  isTournamentScreen = false,
  kValue = KValues[0].value,
  player1Raiting = 0,
  onCalculate,
}: {
  isTournamentScreen?: boolean;
  kValue?: number;
  player1Raiting?: number;
  onCalculate: (
    calculationResult: CalculatorSchemeType & CalculationResult
  ) => void;
}) {
  const [t] = useTranslation("common");
  const gameResultOptions = [
    { label: t("win") as string, value: 1 },
    { label: t("draw") as string, value: 0.5 },
    { label: t("lose") as string, value: 0 },
  ];
  const { handleChange, values, handleSubmit, errors } = useForm<
    typeof getCreateTournamentScheme,
    CalculatorSchemeType
  >({
    initialValues: {
      k_value: kValue,
      y_r: player1Raiting,
      res: gameResultOptions[0].value,
    },
    onSubmit: (valuese: CalculatorSchemeType) => {
      const calculationResult = calculateRaiting(values);
      onCalculate({ ...calculationResult, ...values });
    },
    getValidationScheme: getCalculatorScheme,
  });

  return (
    <View style={styles.container}>
      {!isTournamentScreen && (
        <Input
          style={styles.formGroup}
          keyboardType="numeric"
          type="number"
          placeholder={t("your_rating") as string}
          name="y_r"
          value={values.y_r}
          error={errors.y_r}
          handleChange={handleChange}
        />
      )}
      <Input
        style={styles.formGroup}
        keyboardType="numeric"
        type="number"
        label={t("oponent_rating") as string}
        name="o_r"
        handleChange={handleChange}
        value={values.o_r}
        error={errors.o_r}
      />
      <View style={styles.formGroup}>
        <OptionButtons
          options={gameResultOptions}
          name="res"
          onChange={handleChange}
          value={values.res}
        />
      </View>
      {!isTournamentScreen && (
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
      )}
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
