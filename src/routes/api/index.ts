import type { RequestHandler } from "@builder.io/qwik-city";
import { ZodError } from "zod";
import { type EmailData, emailSchema } from "~/util/schema";

export const onPost: RequestHandler<EmailData> = async ({ request }) => {
  const input = await request.json();

  try {
    emailSchema.parse(input);
  } catch (err) {
    if (err instanceof ZodError) {
      return { errors: { description: `${err.issues[0].message}` } };
    }
  }

  const sendEmail = await fetch(
    "https://api.sparkpost.com/api/v1/transmissions/",
    {
      method: "POST",
      headers: {
        Authorization: import.meta.env.VITE_SPARKPOST_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipients: [
          {
            address: {
              email: import.meta.env.VITE_MY_EMAIL_ADDRESS,
              name: "Ryan Brooks",
            },
          },
        ],
        content: {
          from: {
            name: input.name,
            email: import.meta.env.VITE_SPARKPOST_DOMAIN,
          },
          subject: "Hello from portfolio",
          html: `<html><body><p>Contact email: ${input.email}</p><p>${input.message}</p></body></html>`,
        },
      }),
    }
  );

  return await sendEmail.json();
};
