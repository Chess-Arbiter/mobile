import { FormValue, InputChangeHandler } from "../../models/global";

export type SelectOption = {
  label: string;
  value: FormValue;
};

export type SelectProps = {
  options: SelectOption[];
  name: string;
  onChange: InputChangeHandler;
  value: FormValue;
};
