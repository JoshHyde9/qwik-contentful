import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="container mx-auto max-w-[65ch] pb-10 px-2 md:px-0">
      <Slot />
    </section>
  );
});
