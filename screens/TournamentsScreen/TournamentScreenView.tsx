import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  Searchbar,
  FAB,
  ActivityIndicator,
  Text,
  Button,
} from "react-native-paper";
import EmptyState from "./components/EmptyState/EmptyState";
import TournamentsList from "./components/TournamentsList/TournamentsList";
import { TournamentScreenType } from "./TournamentScreen.types";
import styles from "./TournamentsScreen.styles";

export default function TournamentsScreenView({
  search,
  setSearch,
  onTournamentPress,
  onDeleteStart,
  onCreateStart,
  tournaments,
  isLoading,
}: TournamentScreenType) {
  const [t] = useTranslation("common");
  const isEmptyState = tournaments?.docs?.length === 0 && !search && !isLoading;

  return (
    <View style={styles.wrapper}>
      {!isEmptyState && (
        <Searchbar
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
        />
      )}
      {!isEmptyState && (
        <TournamentsList
          tournaments={tournaments?.docs}
          onTournamentPress={onTournamentPress}
          onDeleteStart={onDeleteStart}
        />
      )}
      <View style={styles.tournamentsWrapper}>
        {isLoading && <ActivityIndicator />}
        {isEmptyState && (
          <EmptyState
            content={
              <>
                <Text
                  style={{
                    fontWeight: "700",
                    maxWidth: 250,
                    textAlign: "center",
                    fontSize: 16,
                  }}
                >
                  {t("empty_tournaments")}
                </Text>
                <Button
                  onPress={onCreateStart}
                  style={{ marginTop: 16 }}
                  icon="plus"
                >
                  {t("create_tournament")}
                </Button>
              </>
            }
          />
        )}
      </View>
      {!isEmptyState && (
        <FAB icon="plus" style={styles.fab} onPress={() => onCreateStart()} />
      )}
    </View>
  );
}
