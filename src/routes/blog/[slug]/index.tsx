import { component$, Resource, useStyles$ } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { Entry } from "contentful";
import { marked } from "marked";
import dayjs from "dayjs";

import styles from "./styles.css?inline";

// Contentful
import { contentfulClient } from "~/service/contentful";

import { calcReadingTime } from "~/util/calcReadingTime";

type BlogData = {
  title: string;
  path: string;
  date: string;
  content: string;
};

type EndpointData = Entry<BlogData> | null;

export const onGet: RequestHandler<EndpointData> = async ({
  params,
  response,
}) => {
  try {
    return await contentfulClient.getEntry(params.slug);
  } catch (error) {
    response.status = 404;
    return null;
  }
};

export default component$(() => {
  useStyles$(styles);
  const resource = useEndpoint<typeof onGet>();

  return (
    <Resource
      value={resource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(post) => {
        return (
          <article class="container mx-auto max-w-[65ch]">
            <h1 class="text-4xl font-bold">{post?.fields.title}</h1>
            <p>{dayjs(post?.sys.createdAt).format("MMMM DD, YYYY")}</p>
            <p>{calcReadingTime(post!.fields.content)} min read</p>
            <hr class="my-5" />
            <div
              class="blog-styles"
              dangerouslySetInnerHTML={marked.parse(post!.fields.content)}
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
