import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { DeleteConfirmProps } from "../../TournamentScreen.types";

export default function DeleteConfirm({
  visible,
  hideDialog,
  onConfirm,
}: DeleteConfirmProps) {
  const [t] = useTranslation("common");

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{t("delete_tournament")}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{t("delete_tournament_message")}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>{t("cancel")}</Button>
          <Button onPress={onConfirm}>{t("confirm")}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
