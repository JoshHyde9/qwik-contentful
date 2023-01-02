import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container flex flex-col items-center mx-auto max-w-7xl lg:flex-row lg:items-center">
      <div class="max-w-xl">
        <img src="/images/me.jpg" class="block w-full" alt="Ryan Brooks" />
      </div>
      <div class="bg-slate-50 lg:-ml-16 lg:mt-[33%] p-4 pl-10">
        <div class="max-w-lg pt-6">
          <h1 class="text-4xl font-semibold mb-5">Hello There!</h1>
          <h2 class="text-4xl font-semibold mb-5 lg:mb-24">
            My name is Ryan. I am a full-time{" "}
            <span class="text-coral">virgin</span> and{" "}
            <span class="text-coral">sysadmin</span>.
          </h2>
        </div>
        <p>
          As an IT career professional, I have had experience in the technical
          and operational spaces. During my secondary and tertiary education, I
          constantly focused on ICT and improving my knowledge from my in school
          experience. Having established myself in the industry, I am continuing
          to develop and improve my skills as I look for further opportunities.
          My continually expanding knowledge is enhanced by my home
          infrastructure, including networking equiptment, server hardware and
          configuration.
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "About Ryan Brooks",
    },
  ],
};
