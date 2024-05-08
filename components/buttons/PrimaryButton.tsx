import React from "react";
import { Button, useTheme, ButtonProps } from "react-native-paper";

export default function PrimaryButton(props: ButtonProps) {
  const theme = useTheme();

  return <Button buttonColor={theme.colors.backdrop} {...props} />;
}
