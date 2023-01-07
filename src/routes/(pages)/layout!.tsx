import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/layout/Navbar";

export default component$(() => {
  return (
    <>
      <main class="min-h-screen dark:bg-neutral-800">
        <Navbar />
        <section class="h-[calc(100%_-_80px)] dark:bg-neutral-800">
          <Slot />
        </section>
      </main>
    </>
  );
});
