import React, { Fragment } from "react";
import { List, Divider, IconButton } from "react-native-paper";
import { ITournament } from "../../../../models/tournaments";

export default function TournamentsList({
  tournaments,
  onTournamentPress,
  onDeleteStart,
}: any) {
  return tournaments?.map((tournament: ITournament) => (
    <Fragment key={tournament.id}>
      <List.Item
        onPress={() => onTournamentPress(tournament.id)}
        title={tournament.name}
        right={(props) => (
          <IconButton
            icon="delete"
            onPress={() => onDeleteStart(tournament.id)}
          />
        )}
      />
      <Divider />
    </Fragment>
  ));
}
