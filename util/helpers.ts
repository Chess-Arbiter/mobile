import { CalculationResult } from "../models/tournaments";
import { CalculatorSchemeType } from "./validators";

export function calculateRating({
  y_r,
  o_r,
  k_value,
  res,
}: CalculatorSchemeType): CalculationResult {
  const k = k_value || 10;
  const diff = getRatingDiff({ y_r, o_r });

  const r = Math.pow(10, diff / 400);
  const E = 1 / (1 + r);
  const current_rating = y_r + k * (res - E);
  const change = -(y_r - current_rating);

  return {
    change: +Number(change).toFixed(2),
    current_rating: +Number(current_rating).toFixed(2),
  };
}

export function formatFloatNumber(num: number): number {
  return Math.round(num * 100) / 100;
}

function getRatingDiff({ y_r, o_r }: { y_r: number; o_r: number }): number {
  const diff = o_r - y_r;

  if (diff < -400) {
    return -400;
  }

  if (diff > 400) {
    return 400;
  }

  return diff;
}
