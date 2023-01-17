import React, { Fragment } from "react";
import { Searchbar, List, FAB, Divider, IconButton } from "react-native-paper";
import tournaments from "./mock";
import { TournamentScreenType } from "./TournamentScreen.types";
import styles from "./TournamentsScreen.styles";

export default function TournamentsScreenView({
  search,
  setSearch,
  onTournamentPress,
  onDeleteStart,
  onCreateStart,
}: TournamentScreenType) {
  return (
    <>
      <Searchbar placeholder="Search" onChangeText={setSearch} value={search} />
      {tournaments.map((tournament) => (
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
      ))}
      <FAB icon="plus" style={styles.fab} onPress={() => onCreateStart()} />
    </>
  );
}
