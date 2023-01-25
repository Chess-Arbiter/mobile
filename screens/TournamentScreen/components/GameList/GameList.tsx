import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, IconButton, List, Text } from "react-native-paper";
import { ID } from "../../../../models/global";
import { IGame } from "../../../../models/tournaments";
import { formatFloatNumber } from "../../../../util/helpers";

function getResultIcon(raitingChange: number): string {
  if (raitingChange > 0) {
    return "plus";
  }

  if (raitingChange === 0) {
    return "handshake-outline";
  }

  return "minus";
}

export default function GameList({
  isLoading,
  games,
  onDeleteGame,
}: {
  isLoading: boolean;
  games: IGame[];
  onDeleteGame: (gameId: ID) => void;
}) {
  const [isGamesOpen, setIsGamesOpen] = useState(true);
  const [t] = useTranslation("common");
  function handleToggleGames() {
    setIsGamesOpen(!isGamesOpen);
  }

  if (isLoading) {
    return <ActivityIndicator style={{ marginTop: 16, marginBottom: 16 }} />;
  }

  if (!games || (!isLoading && games.length === 0)) {
    return (
      <Text style={{ textAlign: "center", marginTop: 16, marginBottom: 16 }}>
        {t("no_games_found")}
      </Text>
    );
  }

  return (
    <List.Accordion
      title={t("games")}
      onPress={handleToggleGames}
      expanded={isGamesOpen}
      left={(props) => <List.Icon {...props} icon="chess-king" />}
    >
      {games.map((game: IGame) => (
        <List.Item
          key={game.id}
          title={`${t("oponent_rating")}: ${game.oponent_rating}`}
          description={`${t("rating_change")}: ${formatFloatNumber(
            game.change
          )}`}
          left={(props) => (
            <List.Icon {...props} icon={getResultIcon(game.change)} />
          )}
          right={() => (
            <IconButton icon="delete" onPress={() => onDeleteGame(game.id)} />
          )}
        />
      ))}
    </List.Accordion>
  );
}
