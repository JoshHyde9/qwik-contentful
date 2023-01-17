# Qwik + Contentful

Probably the stack I am going to use for anything CMS related.

## Run locally

This project uses pnpm. Getting started can be found [here](https://pnpm.io/installation).

1. Install dependencies `pnpm i`.
2. Setup a [Contentful](https://www.contentful.com/) account.
3. Run `cp .env.sample .env` .
4. Add your Contentful API key and Space ID in the newly created `.env`.
   1. From the dashboard click on the space you want to use.
   2. Go to `Settings > API Keys` and create a new API key.
   3. Add the new keys to the `.env`.
5. Add your Content Type ID to the `.env` as well.
   1. Select `Space > Your Space`.
   2. Create a new entry or click on an existing entry.
   3. Click on `Info` on the right-hand side.
   4. There should be an option called `Content Type ID`. This goes into your `.env`.
6. This project also uses [SparkPost](https://www.sparkpost.com/) for emailing. Starter plan gets you 500 emails for free / month. Getting started with SparkPost can be found [here](https://support.sparkpost.com/docs/getting-started/getting-started-sparkpost).
7. Run `pnpm dev` to start the local development server.

### Note

In `src/global.d.ts`. `BlogData` matches the model that is created in Contentful.

![image](https://user-images.githubusercontent.com/40751087/211268364-e7bbf268-3648-4fd7-86d5-f5a48334cabe.png)

## Deployment

This is setup to deploy to Netlify's Edge. To deploy somewhere else, view Qwik's deployment docs [here](https://qwik.builder.io/integrations/deployments/overview/).
