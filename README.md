This is a [Next.js](https://nextjs.org/) 14 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`next-page-router-scaffold-2024`](https://github.com/jblossomweb/next-page-router-scaffold-2024).

## Prerequisites

![](https://nodejs.org/static/images/logo.svg)

[Node.js](https://nodejs.org/) version [`>=18.17.0`](https://nodejs.org/dist/v18.15.0/node-v18.17.0.pkg) is required by Next 14.

[Node.js](https://nodejs.org/) version [`>=20.12.2`](https://nodejs.org/dist/v18.15.0/node-v20.12.2.pkg) is recommended by [`next-page-router-scaffold-2024`](https://github.com/jblossomweb/next-page-router-scaffold-2024)

## Getting Started

First, install dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

### React Pages

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/views/HomePage`. The page auto-updates as you edit the file.
The Route for this page is defined by `src/pages/index.ts`.

### API Routes

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

An example can be accessed at [http://localhost:3000/api/ping](http://localhost:3000/api/ping).

This endpoint's controller can be edited in `src/api/controllers/PingController`.
The Route for this endpoint is defined by `src/pages/api/ping.ts`.

### Component Library

To run the storybook dev server:

```bash
npm run storybook
```

To generate a static build that can be independently deployed:

```bash
npm run storybook:build
```

### Other Commands

To run the linter:

```bash
npm run lint
```

To run tests once:

```bash
npm test
```

To run test watcher:

```bash
npm run test:watch
```

To run coverage report:

```bash
npm run test:coverage
```

A full list of commands can be found in the [`package.json`](https://github.com/jblossomweb/next-page-router-scaffold-2024/blob/main/package.json)

### Code Generation

As of 2024, this scaffold now comes with a `.fttemplates` directory, to be used with the Folder Templates VSCode plugin:
https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure

If you have this plugin installed, you will have the option to generate scaffolded components, views, or API controllers. Right-click on the directory in the tree, and select "Create New Templated Folder" to try it out.

## Learn More

### Typescript

- [Typescript Documentation](https://www.typescriptlang.org/docs/) - Typescript's official documentation.
- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - The Typescript Handbook.
- [Typescript in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - Learn Typescript, for Javascript Programmers.

### React

- [React Documentation](https://react.dev/reference/react) - a detailed reference documentation for working with React.
- [Learn React](https://react.dev/learn) - an introduction to the 80% of React concepts that you will use on a daily basis.

### Next.js

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Tailwind and Styled Components

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Documentation for Tailwind CSS.
- [Styled Components Documentation](https://styled-components.com/docs) - Documentation for Styled Components.
- [Tailwind Styled Components](https://www.npmjs.com/package/tailwind-styled-components) - A package this scaffold uses to help them play nice together. Please read the docs to be aware of any gotchas.

## Deploy

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Netlify

I have also had success deploying Next.js apps using this scaffold to [Netlify](https://www.netlify.com/p/next-on-netlify).

If you are looking to move away from Vercel, check them out.

### Storybook

Storybook can be built for production for use as a component library. If you want to do this, there are plenty of options. The output of the build should not require server interaction, so it is a matter of putting into a bucket and pointing a domain at it.

This can be done in AWS with an S3 bucket and Cloudfront, or in GCP with similar tools.

However, one of the quickest, easiest ways I've found is to use [Firebase Hosting](https://firebase.google.com/docs/hosting), which has some handly CLI tools out of the box, and requires very little configuration.
