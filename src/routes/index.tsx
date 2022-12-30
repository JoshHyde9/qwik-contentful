import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="flex justify-center items-center h-full">
      <div class="flex flex-col items-center mb-32">
        <h1 class="text-7xl font-black text-pink-200 tracking-wider">Ryan</h1>
        <h2 class="text-7xl font-black text-pink-200 tracking-wider">Brooks</h2>
        <p class="text-5xl mt-5 font-light tracking-wide">In the Flesh</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "The home to all things of Ryan Brooks",
    },
  ],
};
