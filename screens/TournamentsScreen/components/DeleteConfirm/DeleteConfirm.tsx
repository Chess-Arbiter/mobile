import React from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { DeleteConfirmProps } from "../../TournamentScreen.types";

export default function DeleteConfirm({
  visible,
  hideDialog,
}: DeleteConfirmProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">This is simple dialog</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
