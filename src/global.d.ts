export {};

declare global {
  export type BlogData = {
    title: string;
    description: string;
    content: string;
    slug: string;
    previewImage: string;
  };
}
