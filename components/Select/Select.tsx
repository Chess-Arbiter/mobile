import React from "react";
import { Picker } from "@react-native-picker/picker";
import { SelectProps } from "./Select.types";
import { useTheme } from "react-native-paper";

export default function Select({
  value,
  onChange,
  name,
  options,
}: SelectProps) {
  const theme = useTheme();
  return (
    <Picker
      selectedValue={value}
      style={{
        backgroundColor: theme.colors.secondary,
        color: "white",
      }}
      mode="dropdown"
      dropdownIconColor="white"
      onValueChange={(itemValue) => onChange(name, itemValue)}
    >
      {options.map((option) => (
        <Picker.Item
          label={option.label}
          value={option.value}
          key={option.value}
        />
      ))}
    </Picker>
  );
}
