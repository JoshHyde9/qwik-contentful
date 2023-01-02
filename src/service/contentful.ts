import type { EntryCollection } from "contentful";

export const getEntryBySlug = async <T>(slug: string) => {
  const request = `https://cdn.contentful.com/spaces/${
    import.meta.env.VITE_CONTENTFUL_SPACE_ID
  }/environments/master/entries?access_token=${
    import.meta.env.VITE_CONTENTFUL_API_KEY
  }&content_type=${
    import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE_ID
  }&fields.slug[in]=${slug}`;

  const response = await fetch(request, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: EntryCollection<T> = await response.json();

  if (!data.items) {
    return null;
  }

  return data.items[0];
};

export const getEntries = async <T>() => {
  const request = `https://cdn.contentful.com/spaces/${
    import.meta.env.VITE_CONTENTFUL_SPACE_ID
  }/environments/master/entries/?access_token=${
    import.meta.env.VITE_CONTENTFUL_API_KEY
  }&order=-sys.createdAt`;

  const response = await fetch(request, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: EntryCollection<T> = await response.json();

  return data;
};
