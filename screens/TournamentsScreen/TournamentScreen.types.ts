import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ID } from "../../models/global";
import { ITournament } from "../../models/tournaments";
import { SelectQueryResult } from "../../util/sql";

export type TournamentScreenType = {
  search: string;
  setSearch: (searchValue: string) => void;
  onTournamentPress: (tournament: ITournament) => void;
  onDeleteStart: (tournamentId: ID) => void;
  onCreateStart: () => void;
  tournaments: SelectQueryResult | undefined;
  isLoading: boolean;
  error: string;
};

export type DeleteConfirmProps = {
  visible: boolean;
  hideDialog: () => void;
  onConfirm: () => void;
};

export interface IProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}
