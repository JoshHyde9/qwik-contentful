import { component$, useStyles$ } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import { DocumentHead } from "@builder.io/qwik-city";
import { marked } from "marked";
import dayjs from "dayjs";
import sanitizeHtml from "sanitize-html";

import styles from "./styles.css?inline";

// Contentful
import { getEntryBySlug } from "~/service/contentful";

import { calcReadingTime } from "~/util/calcReadingTime";
import { NotFound } from "~/components/NotFound";
import { Icon } from "~/components/Icon";

export const getPostBySlug = loader$(async ({ params }) => {
  return await getEntryBySlug<BlogData>(params.slug);
});

export default component$(() => {
  useStyles$(styles);
  const post = getPostBySlug.use();

  return (
    <>
      {!post.value ? (
        <NotFound />
      ) : (
        <section class="dark:text-slate-50">
          <article class="container mx-auto max-w-prose py-10 px-2 md:px-0">
            <h1 class="text-4xl font-bold mb-5">{post.value.fields.title}</h1>

            <div class="flex items-center my-1 gap-x-2">
              <Icon
                name="Calendar"
                class="stroke-black fill-none dark:stroke-white"
              />
              <p>{dayjs(post.value.sys.createdAt).format("MMMM DD, YYYY")}</p>
            </div>

            <div class="flex items-center gap-x-2">
              <Icon
                name="Clock"
                class="stroke-black fill-none dark:stroke-white"
              />
              <p>{calcReadingTime(post.value.fields.content)} min read</p>
            </div>

            <hr class="my-5" />

            <div
              class="blog-styles"
              dangerouslySetInnerHTML={sanitizeHtml(
                marked.parse(post.value.fields.content)
              )}
            ></div>
          </article>
        </section>
      )}
    </>
  );
});

export const head: DocumentHead = ({ getData }) => {
  const data = getData(getPostBySlug);

  return {
    title: data?.fields.title,
    meta: [
      {
        name: "description",
        content: data?.fields.description,
      },
    ],
  };
};
