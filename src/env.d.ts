/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTENTFUL_API_KEY: string;
  readonly VITE_CONTENTFUL_SPACE_ID: string;
  readonly VITE_CONTENTFUL_CONTENT_TYPE_ID: string;
  readonly VITE_SPARKPOST_API_KEY: string;
  readonly VITE_MY_EMAIL_ADDRESS: string;
  readonly VITE_SPARKPOST_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
