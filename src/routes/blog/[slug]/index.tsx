import {
  component$,
  Resource,
  useStyles$,
  useResource$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { DocumentHead } from "@builder.io/qwik-city";
import { Entry } from "contentful";
import { marked } from "marked";
import dayjs from "dayjs";

import styles from "./styles.css?inline";

// Contentful
import { contentfulClient } from "~/service/contentful";

import { NotFound } from "~/components/NotFound";
import { calcReadingTime } from "~/util/calcReadingTime";

type BlogData = {
  title: string;
  path: string;
  date: string;
  content: string;
};

export default component$(() => {
  useStyles$(styles);
  const location = useLocation();

  const resource = useResource$<Entry<BlogData>>(async () => {
    const data: Entry<BlogData> = await contentfulClient.getEntry(
      location.params.slug
    );
    return data;
  });

  return (
    <Resource
      value={resource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <NotFound />}
      onResolved={(post) => {
        return (
          <article class="container mx-auto max-w-[65ch]">
            <h1 class="text-4xl font-bold">{post.fields.title}</h1>
            <p>{dayjs(post.sys.createdAt).format("MMMM DD, YYYY")}</p>
            <p>{calcReadingTime(post.fields.content)} min read</p>
            <hr class="my-5" />
            <div
              class="blog-styles"
              dangerouslySetInnerHTML={marked.parse(post.fields.content)}
            ></div>
          </article>
        );
      }}
    />
  );
});

export const head: DocumentHead = {
  title: "Blog",
  meta: [
    {
      name: "description",
      content: "Using Qwik with Contenful as a CMS",
    },
  ],
};
