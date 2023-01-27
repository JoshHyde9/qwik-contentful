import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { TimelineItem } from "~/components/TimelineItem";

export default component$(() => {
  return (
    <div class="container flex flex-col items-center mx-auto px-2 py-10 lg:max-w-5xl lg:mt-0 lg:flex-row lg:items-center xl:max-w-6xl">
      <div class="max-w-xl">
        <img
          src="/images/me.jpg"
          class="block w-full rounded-md"
          alt="Ryan Brooks"
        />
      </div>
      <div class="bg-slate-50 p-4 pl-10 rounded-md lg:-ml-16 lg:mt-[33%] dark:bg-neutral-800 dark:text-slate-50">
        <div class="max-w-lg pt-6">
          <h1 class="text-4xl font-semibold mb-5">Hello There!</h1>
          <h2 class="text-4xl font-semibold mb-5 lg:mb-24">
            My name is Ryan. I am a full-time{" "}
            <span class="text-coral">virgin</span> and part-time{" "}
            <span class="text-coral">Identity & Access Admin</span>.
          </h2>
        </div>
        <TimelineItem
          date={{ start: "Dec 2022", end: "Now" }}
          title="IAM Product Manager / SME"
          company="Department of Education (Corporate)"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel odio incidunt nostrum odit, amet est architecto consectetur
            aliquam temporibus! Quae fugit tempora laboriosam distinctio quo
            veritatis quam aliquam fugiat.
          </p>
        </TimelineItem>
        <TimelineItem
          date={{ start: "Oct 2021", end: "Dec 2022" }}
          title="IAM Operational Support"
          company="Department of Education (Corporate)"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel odio incidunt nostrum odit, amet est architecto consectetur
            aliquam temporibus! Quae fugit tempora laboriosam distinctio quo
            veritatis quam aliquam fugiat.
          </p>
        </TimelineItem>
        <TimelineItem
          date={{ start: "Feb 2019", end: "Oct 2021" }}
          title="Onsite Technical Officer"
          company="Department of Education (School)"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel odio incidunt nostrum odit, amet est architecto consectetur
            aliquam temporibus! Quae fugit tempora laboriosam distinctio quo
            veritatis quam aliquam fugiat.
          </p>
        </TimelineItem>
        <TimelineItem
          date={{ start: "Nov 2017", end: "Sep 2020" }}
          title="Team Member"
          company="Coles Supermarkets"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel odio incidunt nostrum odit, amet est architecto consectetur
            aliquam temporibus! Quae fugit tempora laboriosam distinctio quo
            veritatis quam aliquam fugiat.
          </p>
        </TimelineItem>
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
