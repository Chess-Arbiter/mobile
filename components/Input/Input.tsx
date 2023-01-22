import React from "react";
import { HelperText, TextInput, TextInputProps } from "react-native-paper";
import { InputChangeHandler } from "../../models/global";

export default function Input({
  name,
  handleChange,
  type = "text",
  error,
  ...props
}: TextInputProps & {
  name: string;
  handleChange: InputChangeHandler;
  type: "text" | "number";
}) {
  return (
    <>
      <TextInput
        {...props}
        onChangeText={(value: string | number) =>
          handleChange(name, type === "number" && value ? Number(value) : value)
        }
      />
      {error && (
        <HelperText type="error" visible>
          {error}
        </HelperText>
      )}
    </>
  );
}
