import { component$ } from "@builder.io/qwik";
import dayjs from "dayjs";

type CardProps = {
  title: string;
  description: string;
  publishedDate: string;
  readingTime: number;
};

export const BlogCard = component$<CardProps>(
  ({ title, description, publishedDate, readingTime }) => (
    <div class="flex flex-col gap-6 my-5 p-5 rounded-xl hover:bg-tradewind-light/[0.2] transition-colors duration-200">
      <h2 class="text-2xl font-semibold">{title}</h2>
      <p>{description}</p>
      <div class="flex gap-2">
        <p>{dayjs(publishedDate).format("MMMM DD, YYYY")}</p>
        <p>&#x2022;</p>
        <p>{readingTime} min read</p>
      </div>
    </div>
  )
);
