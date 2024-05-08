import React, { useCallback, useState } from "react";
import useQuery from "../../hooks/useQuery";
import { deleteTournament, searchTournament } from "../../data/api";
import DeleteConfirm from "./components/DeleteConfirm/DeleteConfirm";
import TournamentsScreenView from "./TournamentScreenView";
import { SelectQueryResult } from "../../util/sql";
import { ID } from "../../models/global";
import { useFocusEffect } from "@react-navigation/native";
import { ITournament } from "../../models/tournaments";
import { IProps } from "./TournamentScreen.types";

export default function TournamentsScreen({ navigation }: IProps) {
  const [search, setSearch] = useState("");
  const [activeTournamentId, setActiveTournamentId] = useState<ID>("");
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);
  const fetchTournaments = useCallback(() => {
    return searchTournament(search);
  }, [search]);

  const { data, setData, isLoading, error, refetch } =
    useQuery<SelectQueryResult>(fetchTournaments);

  function onTournamentPress(tournament: ITournament) {
    navigation.navigate("Tournament", { tournament, name: tournament.name });
  }

  function onCreateStart() {
    navigation.navigate("CreateTournament");
  }

  function onDeleteStart(tournamentId: ID) {
    setActiveTournamentId(tournamentId);
    setIsDeleteConfirmVisible(true);
  }

  async function onDelete() {
    await deleteTournament(activeTournamentId);
    setData((prev: any) => ({
      ...prev,
      docs: prev.docs?.filter(
        ({ id }: { id: ID }) => id !== activeTournamentId
      ),
    }));
    setActiveTournamentId("");
    setIsDeleteConfirmVisible(false);
  }

  function hideDeleteConfirm() {
    setIsDeleteConfirmVisible(false);
  }

  useFocusEffect(
    useCallback(() => {
      refetch();
      return () => {
        setSearch("");
      };
    }, [])
  );

  return (
    <>
      <TournamentsScreenView
        search={search}
        setSearch={setSearch}
        onDeleteStart={onDeleteStart}
        onTournamentPress={onTournamentPress}
        onCreateStart={onCreateStart}
        tournaments={data}
        isLoading={isLoading}
        error={error}
      />
      <DeleteConfirm
        onConfirm={onDelete}
        visible={isDeleteConfirmVisible}
        hideDialog={hideDeleteConfirm}
      />
    </>
  );
}
