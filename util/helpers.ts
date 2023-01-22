import { CalculationResult } from "../models/tournaments";
import { CalculatorSchemeType } from "./validators";

export function calculateRaiting({
  y_r,
  o_r,
  k_value,
  res,
}: CalculatorSchemeType): CalculationResult {
  const k = k_value || 10;
  let diff = o_r - y_r;
  if (diff < -400) {
    diff = -400;
  } else if (diff > 400) {
    diff = 400;
  }
  const r = Math.pow(10, diff / 400);
  const E = 1 / (1 + r);
  const current_raiting = y_r + k * (res - E);
  const change = -(y_r - current_raiting);
  return {
    change: +Number(change).toFixed(2),
    current_raiting: +Number(current_raiting).toFixed(2),
  };
}

export function formatFloatNumber(num: number): number {
  return Math.round(num * 100) / 100;
}
