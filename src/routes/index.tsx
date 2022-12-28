import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

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
