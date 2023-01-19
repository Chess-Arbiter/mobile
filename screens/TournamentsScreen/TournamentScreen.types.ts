import { ID } from "../../models/global";
import { SelectQueryResult } from "../../util/sql";

export type TournamentScreenType = {
  search: string;
  setSearch: (searchValue: string) => void;
  onTournamentPress: (tournamentId: ID) => void;
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
