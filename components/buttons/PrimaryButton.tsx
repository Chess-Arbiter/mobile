import React from "react";
import { Button, useTheme } from "react-native-paper";

export default function PrimaryButton(props: any) {
  const theme = useTheme();

  return <Button buttonColor={theme.colors.backdrop} {...props} />;
}
