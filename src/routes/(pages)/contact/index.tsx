import {
  component$,
  $,
  useStore,
  QwikChangeEvent,
  useSignal,
} from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ZodError } from "zod";

import { FormField } from "~/components/FormField";
import { type EmailData, emailSchema } from "~/util/schema";

export default component$(() => {
  const store = useStore<EmailData>({ name: "", email: "", message: "" });
  const responseStore = useStore({ message: "" });
  const loading = useSignal(false);

  const onChange = $(
    (e: QwikChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      store[e.target.name as keyof EmailData] = e.target.value;
    }
  );

  const onSubmit = $(async () => {
    loading.value = true;
    try {
      emailSchema.parse(store);
    } catch (err) {
      if (err instanceof ZodError) {
        loading.value = false;
        return (responseStore.message = err.issues[0].message);
      }
    }

    const response = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(store),
    });

    const data = await response.json();
    loading.value = false;

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
    <div class="container mx-auto max-w-[65ch] px-2 py-10 md:px-0 dark:text-slate-50">
      <h1 class="text-4xl font-bold mb-1">Contact me</h1>
      <p>
        Do you have any questions, concerns or just want to say g'day? Just
        chuck me an email.
      </p>
      <hr class="my-5" />

      <form
        preventdefault:submit
        class="flex flex-col mt-5"
        onSubmit$={onSubmit}
      >
        <div class="flex flex-col my-4">
          <FormField
            label="Name:"
            element="input"
            type="text"
            name="name"
            placeholder="John Doe"
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
        <div class="flex flex-col mt-4">
          <FormField
            label="Message:"
            element="textarea"
            rows={4}
            name="message"
            placeholder="I love your website!"
            value={store.message}
            onChange={onChange}
          />
        </div>

        <div class="h-5 my-2">
          <p class={`italic text-sm ${!responseStore.message ? "hidden" : ""}`}>
            {responseStore.message}
          </p>
        </div>

        <button
          type="submit"
          disabled={loading.value}
          class="w-full flex justify-center bg-coral py-2 rounded-md duration-300 text-white hover:bg-coral/75 disabled:cursor-not-allowed"
        >
          {loading.value ? (
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-100 stroke-2"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
              ></circle>
              <path
                class="fill-coral"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Send email"
          )}
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
