import { ELANGUAGES } from "../../models/global";

export type SelectLanguageProps = {
  open: boolean;
  onSelect: (language: ELANGUAGES) => void;
};
