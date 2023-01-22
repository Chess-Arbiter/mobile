import { z } from "zod";

function translate(key: string, t: any): string {
  return t(key, { ns: "errors" }) as string;
}

export function getCreateTournamentScheme(t: any) {
  return z.object({
    name: z.string().min(1, translate("required", t)),
    rating: z.number().min(1, translate("required", t)),
    k_value: z.number(),
  });
}

export function getCalculatorScheme(t: any) {
  return z.object({
    y_r: z.number().min(1, translate("required", t)),
    o_r: z.number().min(1, translate("required", t)),
    res: z.number(),
    k_value: z.number(),
  });
}

const CalculatorScheme = getCalculatorScheme(() => {});

export type CalculatorSchemeType = z.infer<typeof CalculatorScheme>;
