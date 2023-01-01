import { component$ } from "@builder.io/qwik";

export const NotFound = component$(() => {
  return (
    <div class="w-screen h-[calc(100vh_-_80px)] flex flex-col justify-center items-center text-center">
      <div class="flex flex-col align-center justify-center">
        <h1 class="text-9xl">404</h1>
        <p class="text-lg p-2">
          Nothing to see here.... No, literally, nothing to see here!
        </p>
        <div class="mt-5 lg:mt-10">
          <a
            href="/"
            class="bg-coral py-2.5 px-5 rounded-full text-white duration-150 hover:bg-coral/75"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
});
