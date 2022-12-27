import contentful from "contentful";

if (!import.meta.env.VITE_CONTENTFUL_API_KEY) {
  throw new Error("Missing environment variable: VITE_CONTENTFUL_API_KEY");
}

if (!import.meta.env.VITE_CONTENTFUL_SPACE_ID) {
  throw new Error("Missing environment variable: VITE_CONTENTFUL_SPACE_ID");
}

export const contentfulClient = contentful.createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
});
