# Quiet Mind Wiki

https://quietmind.dev/

Documentation site for Quiet Mind Creative, powered by [@quietmind/mdx-docs](https://www.npmjs.com/package/@quietmind/mdx-docs).

## Quick Start

```sh
git clone https://github.com/ezrafree/quietmind-dev.git ; \
cd quietmind-dev ; \
yarn ; \
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Updating MDX Docs

To update `@quietmind/mdx-docs`:

```sh
yarn upgrade @quietmind/mdx-docs@latest
```

## Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build |
| `yarn serve` | Preview with network access |

## Project Structure

```
quietmind-dev/
├── pages/           # MDX content pages
│   ├── home.mdx
│   └── bootstrap.mdx
├── config/
│   ├── pages.js     # Page routes and navigation
│   └── site.js      # Site name and settings
├── index.html
├── main.jsx
└── vite.config.js
```

## Adding Pages

1. Create a new MDX file in `pages/`:

```mdx
# My New Page

Content goes here with **markdown** and React components.
```

2. Register it in `config/pages.js`:

```js
const MyPageMDX = lazy(() => import("@pages/my-new-page.mdx"));

export const pages = [
  // ...existing pages
  {
    name: "My New Page",
    route: "/my-new-page",
    component: MyPageMDX,
  },
];
```

Pages with `isDefault: true` are the home/fallback route. All other pages appear in the sidebar navigation.
