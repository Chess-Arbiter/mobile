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
