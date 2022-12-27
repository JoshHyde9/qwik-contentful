import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { contentfulClient } from "~/service/contentful";

export const onGet: RequestHandler = async () => {
  const data = await contentfulClient.getEntries();

  console.log(data.items);
};

export default component$(() => {
  return (
    <div>
      <h1 class="text-4xl font-semibold">Hello from Qwik + Tailwind</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik + Contentful",
  meta: [
    {
      name: "description",
      content: "Using Qwik with Contenful as a CMS",
    },
  ],
};
