import React, { useCallback, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { Divider } from "react-native-paper";
import Calculator from "../../components/Calculator/Calculator";
import CalculatorResult from "../../components/CalculatorResult/CalculatorResult";
import GameList from "./components/GameList/GameList";
import {
  CalculationResult,
  IGame,
  ITournament,
} from "../../models/tournaments";
import useQuery from "../../hooks/useQuery";
import {
  createGame,
  deleteGame,
  getGames,
  searchTournament,
} from "../../data/api";
import { CalculatorSchemeType } from "../../util/validators";
import { ID } from "../../models/global";
import { formatFloatNumber } from "../../util/helpers";

export default function TournamentScreen({ route }: any) {
  const { tournament }: { tournament: ITournament } = route.params;
  const fetchGames = useCallback(() => {
    return getGames(tournament.id);
  }, [tournament.id]);
  const {
    data: games,
    isLoading,
    setData: setGames,
    refetch,
  } = useQuery<IGame>(fetchGames);
  const ratingChange = useMemo(() => {
    if (!games) return 0;
    const result = games.docs.reduce((res, { change }) => res + change, 0);
    return formatFloatNumber(result);
  }, [games]);

  async function onCreaqteGame(
    calculationResult: CalculatorSchemeType & CalculationResult
  ) {
    try {
      await createGame(
        tournament.id,
        calculationResult.o_r,
        calculationResult.change
      );
      refetch();
    } catch (err) {
      console.log(err);
    }
  }

  async function onDeleteGame(gameId: ID) {
    await deleteGame(gameId);
    setGames((prev) => ({
      ...prev,
      docs: prev.docs.filter(({ id }) => id !== gameId),
    }));
  }

  return (
    <ScrollView>
      <Calculator
        isTournamentScreen
        kValue={tournament?.k_value}
        player1Rating={tournament?.rating}
        onCalculate={onCreaqteGame}
      />
      <Divider />
      <GameList
        isLoading={isLoading}
        games={games?.docs}
        onDeleteGame={onDeleteGame}
      />
      <Divider />
      {games?.docs?.length > 0 && (
        <CalculatorResult
          currentRating={tournament.rating}
          ratingChange={ratingChange}
        />
      )}
    </ScrollView>
  );
}
