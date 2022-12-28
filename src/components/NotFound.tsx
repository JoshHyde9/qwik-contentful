import { component$ } from "@builder.io/qwik";

export const NotFound = component$(() => {
  return (
    <div class="w-screen h-screen text-center bg-slate-900 text-black flex flex-col justify-center items-center">
      <div class="flex flex-col align-center justify-center rounded-full bg-yellow-400 h-1/2">
        <h1 class="text-9xl">404</h1>
        <p class="p-2">
          Nothing to see here.... No, literally, nothing to see here!
        </p>
        <div class="mt-5 lg:mt-10">
          <a href="/" class="bg-blue-700 py-2.5 px-5 rounded-full text-white">
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
});
