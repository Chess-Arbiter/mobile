import React, { useState } from "react";
import { Searchbar, Text } from "react-native-paper";

export default function TournamentsScreen() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Searchbar placeholder="Search" onChangeText={setSearch} value={search} />
      <Text>AS</Text>
    </>
  );
}
