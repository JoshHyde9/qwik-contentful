import { component$, Resource, useStyles$ } from "@builder.io/qwik";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { DocumentHead } from "@builder.io/qwik-city";
import type { Entry } from "contentful";
import { marked } from "marked";
import dayjs from "dayjs";
import sanitizeHtml from "sanitize-html";

import styles from "./styles.css?inline";

// Contentful
import { getEntryBySlug } from "~/service/contentful";

import { calcReadingTime } from "~/util/calcReadingTime";
import { NotFound } from "~/components/NotFound";
import { Icon } from "~/components/Icon";

export const onGet: RequestHandler<Entry<BlogData> | null> = async ({
  params,
}) => {
  return await getEntryBySlug<BlogData>(params.slug);
};

export default component$(() => {
  useStyles$(styles);
  const resource = useEndpoint<Entry<BlogData> | null>();

  return (
    <section class="dark:text-slate-50">
      <Resource
        value={resource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(post) => (
          <>
            {!post ? (
              <NotFound />
            ) : (
              <article class="container mx-auto max-w-prose py-10 px-2 md:px-0">
                <h1 class="text-4xl font-bold mb-5">{post.fields.title}</h1>

                <div class="flex items-center my-1 gap-x-2">
                  <Icon
                    name="Calendar"
                    class="stroke-black fill-none dark:stroke-white"
                  />
                  <p>{dayjs(post.sys.createdAt).format("MMMM DD, YYYY")}</p>
                </div>

                <div class="flex items-center gap-x-2">
                  <Icon
                    name="Clock"
                    class="stroke-black fill-none dark:stroke-white"
                  />
                  <p>{calcReadingTime(post.fields.content)} min read</p>
                </div>

                <hr class="my-5" />

                <div
                  class="blog-styles"
                  dangerouslySetInnerHTML={sanitizeHtml(
                    marked.parse(post.fields.content)
                  )}
                ></div>
              </article>
            )}
          </>
        )}
      />
    </section>
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
