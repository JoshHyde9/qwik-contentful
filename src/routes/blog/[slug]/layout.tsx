import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article class="container mx-auto max-w-[65ch]">
      <Slot />
    </article>
  );
});
