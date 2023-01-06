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
    <div class="flex flex-row justify-between items-center gap-6 my-5 p-5 rounded-xl hover:bg-global-warming/25 transition-colors duration-300">
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl font-semibold">{title}</h2>
        <p>{description}</p>
        <div class="flex gap-2">
          <p>{dayjs(publishedDate).format("MMMM DD, YYYY")}</p>
          <p>&#x2022;</p>
          <p>{readingTime} min read</p>
        </div>
      </div>
      <div class="w-1/3">
        <img class="rounded-md" src={previewImage} alt="Preview image" />
      </div>
    </div>
  )
);
