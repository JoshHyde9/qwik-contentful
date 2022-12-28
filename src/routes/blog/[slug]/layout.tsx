import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="w-screen h-screen">
      <Slot />
    </section>
  );
});
