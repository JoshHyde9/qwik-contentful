import { component$ } from "@builder.io/qwik";
import { DocumentHead, loader$ } from "@builder.io/qwik-city";
import type { EntryCollection } from "contentful";

// Contentful services
import { getEntries } from "~/service/contentful";

// Components
import { BlogCard } from "~/components/BlogCard";

// Util
import { calcReadingTime } from "~/util/calcReadingTime";
import { NotFound } from "~/components/NotFound";

export const getAllPosts = loader$(async () => {
  return await getEntries<BlogData>();
});

export const BlogCards = component$<{ posts: EntryCollection<BlogData> }>(
  ({ posts }) => (
    <section class="mx-auto max-w-prose py-10 md:px-0 dark:text-slate-50">
      <div class="px-2">
        <h1 class="text-4xl font-bold">Blog</h1>
        <hr class="my-5" />
      </div>
      {posts.items.map((post) => (
        <a href={`/blog/${post.fields.slug}`} key={post.sys.id}>
          <BlogCard
            title={post.fields.title}
            description={post.fields.description}
            publishedDate={post.sys.createdAt}
            readingTime={calcReadingTime(post.fields.content)}
            previewImage={post.fields.previewImage}
          />
        </a>
      ))}
    </section>
  )
);

export default component$(() => {
  const posts = getAllPosts.use();

  return <>{!posts.value ? <NotFound /> : <BlogCards posts={posts.value} />}</>;
});

export const head: DocumentHead = {
  title: "Blog",
  meta: [
    {
      name: "description",
      content: "Writings about what ever I feel like",
    },
  ],
};
