import React from "react";
import { Button, useTheme, ButtonProps } from "react-native-paper";

export default function PrimaryButton(props: ButtonProps) {
  const theme = useTheme();

  const { primary, onPrimary } = theme.colors;

  return <Button buttonColor={primary} textColor={onPrimary} {...props} />;
}
