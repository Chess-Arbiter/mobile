import { z } from "zod";
import i18next from "./i18";

function translate(key: string): string {
  return i18next.t(key, { ns: "errors" }) as string;
}

export const createTournamentSchema = z.object({
  name: z.string().min(1, translate("required")),
  rating: z.number().min(1, translate("required")),
  k_value: z.number(),
});
