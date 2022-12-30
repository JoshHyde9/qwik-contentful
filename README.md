# Qwik + Contentful

Probably the stack I am going to use for anything CMS related.

## Run locally

1. Install dependencies `npm i`.
2. Setup a [https://www.contentful.com/](Contentful) account.
3. Run `cp .env.sample .env` .
4. Add your Contentful API key and Space ID in the newly created `.env`.
   1. From the dashboard click on the space you want to use.
   2. Go to `Settings > API Keys` and create a new API key.
   3. Add the new keys to the `.env`.
5. Run `npm run dev` to start the local development server.

### Note

In `src/global.d.ts`. `BlogData` matches the model that is created in Contentful.

## Deployment

This is setup to deploy to Netlify's Edge. To deploy somewhere else, view Qwik's deployment docs [here](https://qwik.builder.io/integrations/deployments/overview/).
