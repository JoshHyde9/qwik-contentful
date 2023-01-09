import { component$ } from "@builder.io/qwik";
import dayjs from "dayjs";

type CardProps = {
  title: string;
  description: string;
  publishedDate: string;
  readingTime: number;
  previewImage: string;
};

export const BlogCard = component$<CardProps>(
  ({ title, description, publishedDate, readingTime, previewImage }) => (
    <div class="flex flex-row justify-between items-center my-5 py-5 px-1 rounded-xl transition-colors duration-300 md:px-5 md:gap-6 hover:bg-global-warming/25 dark:hover:bg-neutral-600/25">
      <div class="flex flex-col max-w-[240px] gap-y-6 md:max-w-xs">
        <h2 class="text-coral text-2xl font-semibold">{title}</h2>
        <p>{description}</p>
        <div class="flex gap-2">
          <p>{dayjs(publishedDate).format("MMMM DD, YYYY")}</p>
          <p>&#x2022;</p>
          <p>{readingTime} min read</p>
        </div>
      </div>
      <div class="max-w-[100px] md:w-1/3 md:max-w-none">
        <img class="rounded-md" src={previewImage} alt="Preview image" />
      </div>
    </div>
  )
);
