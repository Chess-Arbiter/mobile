import { InputChangeHandler } from "../../models/global";

type OptionButtonOption = {
  label: string;
  value: string | number;
};
export type OptionButtonProps = {
  options: OptionButtonOption[];
  value: string;
  onChange: InputChangeHandler;
  name: string;
};
