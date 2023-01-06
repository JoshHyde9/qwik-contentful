import { z } from "zod";

export const emailSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name must contain at least 1 character(s)" }),
  email: z.string().email(),
  message: z
    .string()
    .min(1, { message: "Message must contain at least 1 character(s)" }),
});

export type EmailData = z.infer<typeof emailSchema>;
