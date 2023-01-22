import React from "react";
import { SegmentedButtons } from "react-native-paper";
import { OptionButtonProps } from "./OptionButtons.types";

export default function OptionButtons({
  options,
  value,
  onChange,
  name,
}: OptionButtonProps) {
  function handleChange(newValue: string) {
    onChange(name, newValue);
  }

  return (
    <SegmentedButtons
      value={value}
      onValueChange={handleChange}
      buttons={options}
    />
  );
}
