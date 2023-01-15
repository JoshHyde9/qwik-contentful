import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/layout/Navbar";

export default component$(() => {
  return (
    <>
      <main class="min-h-screen leading-6 dark:bg-neutral-800 lg:text-lg">
        <Navbar />
        <section class="h-[calc(100%_-_80px)] dark:bg-neutral-800">
          <Slot />
        </section>
      </main>
    </>
  );
});
