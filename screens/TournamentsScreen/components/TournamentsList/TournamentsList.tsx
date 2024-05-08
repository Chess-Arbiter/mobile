import React, { Fragment } from "react";
import { ScrollView } from "react-native";
import { List, Divider, IconButton } from "react-native-paper";
import { ID } from "../../../../models/global";
import { ITournament } from "../../../../models/tournaments";

interface ITournamentsListProps {
  tournaments: any;
  onTournamentPress: (tournament: ITournament) => void;
  onDeleteStart: (tournamentId: ID) => void;
}

export default function TournamentsList({
  tournaments,
  onTournamentPress,
  onDeleteStart,
}: ITournamentsListProps) {
  return (
    <ScrollView>
      {tournaments?.map((tournament: ITournament) => (
        <Fragment key={tournament.id}>
          <List.Item
            onPress={() => onTournamentPress(tournament)}
            title={tournament.name}
            left={(props) => (
              <IconButton
                icon="delete"
                onPress={() => onDeleteStart(tournament.id)}
              />
            )}
          />
          <Divider />
        </Fragment>
      ))}
    </ScrollView>
  );
}
