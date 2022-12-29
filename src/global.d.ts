export {};

declare global {
  export type BlogData = {
    title: string;
    path: string;
    date: string;
    content: string;
  };
}
