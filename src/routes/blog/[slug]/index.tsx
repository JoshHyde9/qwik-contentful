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
// import { contentfulClient } from "~/service/contentful";

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

  const resource = useResource$<Entry<BlogData> | null>(async () => {
    const request = `https://cdn.contentful.com/spaces/${
      import.meta.env.VITE_CONTENTFUL_SPACE_ID
    }/environments/master/entries/${location.params.slug}?access_token=${
      import.meta.env.VITE_CONTENTFUL_API_KEY
    }`;

    const response = await fetch(request, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: Entry<BlogData> = await response.json();

    if (data.sys.id === "NotFound") {
      return null;
    }

    return data;
  });

  return (
    <Resource
      value={resource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(post) => {
        if (!post) {
          // eslint-disable-next-line qwik/single-jsx-root
          return <div>Error</div>;
        } else {
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
        }
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
