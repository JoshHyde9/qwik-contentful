import { component$, $, useStore, QwikChangeEvent } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { FormField } from "~/components/FormField";

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export default component$(() => {
  const store = useStore<EmailData>({ name: "", email: "", message: "" });

  const onChange = $(
    (e: QwikChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      store[e.target.name as keyof EmailData] = e.target.value;
    }
  );

  const onSubmit = $(() => {
    console.log(store);
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
