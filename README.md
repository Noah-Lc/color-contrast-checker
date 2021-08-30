# SHO.ai coding challenge starter

## Stack

This template has the following stack elements set up already:

- A [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- It also includes [Storybook](https://storybook.js.org/), components and stories are stored in the stories folder

- Styling uses [Stitches](https://stitches.dev/), base config with design tokens is in file `stitches.config.ts`

- Tests with [React testing library](https://testing-library.com/docs/react-testing-library/intro)

You can find the example styled button component in the `stories/` folder. This component is there to give you an example of a working component using all parts of the stack together.

**This example component should not be considered as a model to follow or the best practice and can even be deleted from your final code**

Similarly, the stitches.config.ts file can be modified to suit your needs.

The main purpose of this example is to make sure that all features are functional on your local dev environment, make sure that you can see this component in storybook, tests pass and the next app can be launched and built **before starting, and after your finish** your coding challenge.

## Requirements

Node >= 12
Yarn

install with

```bash
yarn install
```

## Develop

### Storybook

run storybook:

```bash
yarn storybook
```

### Test

start tests with jest:

```bash
yarn test
```

### Lint

```bash
yarn lint
```

## Next project

Components will then be consumed in a Next js app

### Dev

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Export site

To check that your components can be exported correctly with SSR enables, run

```bash
yarn export
```

The exported static site can be found in the out folder
