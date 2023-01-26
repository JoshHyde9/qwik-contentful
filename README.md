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

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adaptors/` directory, and a new entry file will be created, such as:

```
└── adaptors/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `pnpm build.server` and `pnpm build.client`:

```shell
pnpm build
```

[Read the full guide here](https://github.com/BuilderIO/qwik/blob/main/starters/adaptors/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
pnpm deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
