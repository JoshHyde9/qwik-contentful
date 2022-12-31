import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container mx-auto flex flex-col gap-10 px-5 lg:flex-row">
      <div>
        <img src="/images/me.jpg" class="block w-full" alt="Ryan Brooks" />
      </div>
      <div>
        <h1 class="text-4xl font-semibold text-coral mb-5">Hello, I'm Ryan</h1>
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
