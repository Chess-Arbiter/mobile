import { ID } from "../../models/global";

export type TournamentScreenType = {
  search: string;
  setSearch: (searchValue: string) => void;
  onTournamentPress: (tournamentId: ID) => void;
  onDeleteStart: (tournamentId: ID) => void;
  onCreateStart: () => void;
};

export type DeleteConfirmProps = {
  visible: boolean;
  hideDialog: () => void;
};
