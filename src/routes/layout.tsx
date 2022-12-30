import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/layout/Navbar";

export default component$(() => {
  return (
    <>
      <main class="h-screen">
        <Navbar />
        <section class="h-[calc(100%_-_80px)]">
          <Slot />
        </section>
      </main>
    </>
  );
});
