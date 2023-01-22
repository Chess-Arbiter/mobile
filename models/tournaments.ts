export interface ITournament {
  id: number;
  name: string;
  rating: number;
  k_value: number;
}

export interface IGame {
  id: number;
  oponent_rating: number;
  tournament_id: number;
  change: number;
}

export type CalculationResult = {
  change: number;
  current_raiting: number;
};
