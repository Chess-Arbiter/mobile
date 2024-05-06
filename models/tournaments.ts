export interface ITournament {
  id: number;
  name: string;
  rating: number;
  k_value: number;
}

export interface IGame {
  id: number;
  opponent_rating: number;
  tournament_id: number;
  change: number;
}

export type CalculationResult = {
  change: number;
  current_rating: number;
  y_r: number;
};
