export type ID = string | number;

export enum ELANGUAGES {
  EN = "en",
  RU = "ru",
  HY = "hy",
}

export interface ILANGUAGE {
  value: ELANGUAGES;
  label: string;
}
