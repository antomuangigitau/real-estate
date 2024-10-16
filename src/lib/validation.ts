import { z } from "zod";

export const SelectFormValidationSchema = z.object({
  property: z.string(),
});
