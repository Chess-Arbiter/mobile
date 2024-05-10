import React from "react";
import { View } from "react-native";
import { HelperText } from "react-native-paper";

import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import useForm from "../../hooks/useForm";
import {
  CalculatorSchemeType,
  getCalculatorScheme,
  getCreateTournamentScheme,
} from "../../util/validators";
import { useTranslation } from "react-i18next";
import styles from "./CreateTournament.styles";
import OptionButtons from "../OptionButtons/OptionButtons";
import { CalculationResult } from "../../models/tournaments";
import { calculateRating } from "../../util/helpers";
import PrimaryButton from "../buttons/PrimaryButton";

const KValues = [10, 15, 20, 30, 40].map((value) => ({
  value,
  label: String(value),
}));

export default function Calculator({
  isTournamentScreen = false,
  kValue = KValues[0].value,
  player1Rating = 0,
  onCalculate,
}: {
  isTournamentScreen?: boolean;
  kValue?: number;
  player1Rating?: number;
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
      y_r: player1Rating,
      res: gameResultOptions[0].value,
      o_r: 0,
    },
    onSubmit: () => {
      const calculationResult = calculateRating(values);
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
          label={t("your_rating") as string}
          value={String(values.y_r)}
          error={errors.y_r}
          handleChange={handleChange}
        />
      )}
      <Input
        style={styles.formGroup}
        keyboardType="numeric"
        type="number"
        label={t("opponent_rating") as string}
        name="o_r"
        handleChange={handleChange}
        value={String(values.o_r)}
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
      <PrimaryButton onPress={handleSubmit} style={styles.submitButton}>
        {t("calculate")}
      </PrimaryButton>
    </View>
  );
}
