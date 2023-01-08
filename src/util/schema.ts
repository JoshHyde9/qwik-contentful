import { z } from "zod";

export const emailSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name must not be empty" }),
  email: z.string().email(),
  message: z
    .string()
    .min(1, { message: "Message must not be empty" }),
});

export type EmailData = z.infer<typeof emailSchema>;
