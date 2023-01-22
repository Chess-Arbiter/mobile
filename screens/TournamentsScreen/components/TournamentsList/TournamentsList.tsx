import React, { Fragment } from "react";
import { ScrollView } from "react-native";
import { List, Divider, IconButton } from "react-native-paper";
import { ITournament } from "../../../../models/tournaments";

export default function TournamentsList({
  tournaments,
  onTournamentPress,
  onDeleteStart,
}: any) {
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
