import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="dark:text-slate-50">
      <Slot />
    </section>
  );
});
