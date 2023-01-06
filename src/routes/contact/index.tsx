import { component$, $, useStore, QwikChangeEvent } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ZodError } from "zod";

import { FormField } from "~/components/FormField";
import { type EmailData, emailSchema } from "~/util/schema";

export default component$(() => {
  const store = useStore<EmailData>({ name: "", email: "", message: "" });
  const responseStore = useStore({ message: "" });

  const onChange = $(
    (e: QwikChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      store[e.target.name as keyof EmailData] = e.target.value;
    }
  );

  const onSubmit = $(async () => {
    try {
      emailSchema.parse(store);
    } catch (err) {
      if (err instanceof ZodError) {
        return (responseStore.message = err.issues[0].message);
      }
    }

    const response = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(store),
    });

    const data = await response.json();

    if (data.errors) {
      responseStore.message = data.errors.description;
    } else {
      store.name = "";
      store.email = "";
      store.message = "";
      responseStore.message = "Email sent successfully";
    }
  });

  return (
    <div class="container mx-auto max-w-[65ch]">
      <h1>Contact me</h1>

      <form preventdefault:submit class="flex flex-col" onSubmit$={onSubmit}>
        <div class="flex flex-col my-4">
          <FormField
            label="Name:"
            element="input"
            type="text"
            name="name"
            placeholder="Your name"
            value={store.name}
            onChange={onChange}
          />
        </div>
        <div class="flex flex-col my-4">
          <FormField
            label="Email:"
            element="input"
            type="email"
            name="email"
            placeholder="john@doe.com"
            value={store.email}
            onChange={onChange}
          />
        </div>
        <div class="flex flex-col my-4">
          <FormField
            label="Message:"
            element="textarea"
            rows={4}
            name="message"
            placeholder="Your message here..."
            value={store.message}
            onChange={onChange}
          />
        </div>

        {responseStore.message && <p class="mb-4">{responseStore.message}</p>}

        <button
          type="submit"
          class="bg-coral py-2 rounded-md duration-300 text-white hover:bg-coral/75"
        >
          Send email
        </button>
      </form>
    </div>
  );
});

export const head: DocumentHead = () => {
  return {
    title: "Contact me",
    meta: [
      {
        name: "description",
        content: "The best website available to contact me",
      },
    ],
  };
};
