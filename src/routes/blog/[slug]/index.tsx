import { component$, Resource, useStyles$ } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { DocumentHead } from "@builder.io/qwik-city";
import { Entry } from "contentful";
import { marked } from "marked";
import dayjs from "dayjs";

import styles from "./styles.css?inline";

// Contentful
import { getEntry } from "~/service/contentful";

import { calcReadingTime } from "~/util/calcReadingTime";
import { NotFound } from "~/components/NotFound";

export const onGet: RequestHandler<Entry<BlogData> | null> = async ({
  params,
}) => {
  return await getEntry<BlogData>(params.slug);
};

export default component$(() => {
  useStyles$(styles);
  const resource = useEndpoint<Entry<BlogData> | null>();

  return (
    <Resource
      value={resource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(post) => (
        <>
          {!post ? (
            <NotFound />
          ) : (
            <article class="container mx-auto max-w-[65ch] pb-10 px-2 md:px-0 ">
              <h1 class="text-4xl font-bold">{post.fields.title}</h1>

              <p>{dayjs(post.sys.createdAt).format("MMMM DD, YYYY")}</p>
              <p>{calcReadingTime(post.fields.content)} min read</p>
              <hr class="my-5" />
              <div
                class="blog-styles"
                dangerouslySetInnerHTML={marked.parse(post.fields.content)}
              ></div>
            </article>
          )}
        </>
      )}
    />
  );
});

export const head: DocumentHead<typeof onGet> = ({ data }) => {
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
