import React, { useState } from "react";
import DeleteConfirm from "./components/DeleteConfirm/DeleteConfirm";
import TournamentsScreenView from "./TournamentScreenView";

export default function TournamentsScreen({ navigation }: any) {
  const [search, setSearch] = useState("");
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);

  function onTournamentPress() {}

  function onCreateStart() {
    navigation.navigate("CreateTournament");
  }

  function onDeleteStart() {
    setIsDeleteConfirmVisible(true);
  }

  function hideDeleteConfirm() {
    setIsDeleteConfirmVisible(false);
  }

  return (
    <>
      <TournamentsScreenView
        search={search}
        setSearch={setSearch}
        onDeleteStart={onDeleteStart}
        onTournamentPress={onTournamentPress}
        onCreateStart={onCreateStart}
      />
      <DeleteConfirm
        visible={isDeleteConfirmVisible}
        hideDialog={hideDeleteConfirm}
      />
    </>
  );
}
