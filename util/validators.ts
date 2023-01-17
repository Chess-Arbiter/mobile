import { z } from "zod";

export const createTournamentSchema = z.object({
  name: z.string().min(1, ""),
  rating: z.number().min(1),
  k_value: z.number(),
});
