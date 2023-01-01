import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section>
      <Slot />
    </section>
  );
});
