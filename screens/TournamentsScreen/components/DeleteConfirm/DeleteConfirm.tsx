import React from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { DeleteConfirmProps } from "../../TournamentScreen.types";

export default function DeleteConfirm({
  visible,
  hideDialog,
  onConfirm,
}: DeleteConfirmProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Delete tournament</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Are you sure you want to delete this tournament?
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={onConfirm}>Yes</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
