import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import Calculator from "../../components/Calculator/Calculator";
import CalculatorResult from "../../components/CalculatorResult/CalculatorResult";
import { CalculationResult } from "../../models/tournaments";
import { CalculatorSchemeType } from "../../util/validators";

export default function CalculatorScreen() {
  const [calculationResult, setCalculationResult] =
    useState<CalculationResult>();
  function onCalculate(result: CalculationResult & CalculatorSchemeType) {
    setCalculationResult(result);
  }

  return (
    <ScrollView>
      <Calculator onCalculate={onCalculate} />
      {calculationResult && (
        <>
          <Divider />
          <CalculatorResult
            currentRaiting={calculationResult.y_r}
            raitingChange={calculationResult.change}
          />
        </>
      )}
    </ScrollView>
  );
}
