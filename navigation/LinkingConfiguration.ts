import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Handbook: "handbook",
          Tournaments: {
            screens: {
              tournaments: "tournaments",
              tournament: "tournaments/:id",
            },
          },
        },
      },
      CreateTournament: "tournament-create",
      NotFound: "*",
    },
  },
};

export default linking;
