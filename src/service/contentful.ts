import type { Entry, EntryCollection } from "contentful";

export const getEntry = async <T>(slug: string) => {
  const request = `https://cdn.contentful.com/spaces/${
    import.meta.env.VITE_CONTENTFUL_SPACE_ID
  }/environments/master/entries/${slug}?access_token=${
    import.meta.env.VITE_CONTENTFUL_API_KEY
  }`;

  const response = await fetch(request, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: Entry<T> = await response.json();

  if (data.sys.id === "NotFound") {
    return null;
  }

  return data;
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
