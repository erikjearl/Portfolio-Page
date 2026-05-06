# Erik Earl — Portfolio

Personal portfolio site built with React and Vite. Showcases my experience, projects, and background as a Platform/DevOps engineer.

**Live site:** [erikjearl.com](https://erikjearl.com)

## Stack

- **React 18** + **Vite** — fast dev server and build
- **Material UI (MUI v5)** — component library and theming
- **React Spring / @react-spring/parallax** — scroll-driven parallax animations
- **GitHub Actions + gh-pages** — automated deployment to GitHub Pages

## Sections

- **About Me** — background and introduction
- **Experience** — work history (Qualcomm Platform & DevOps, internships)
- **Projects** — personal and academic projects (Kubernetes game server platform, manga translation ML pipeline)
- **Contact** — links and contact info

## Local Development

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Builds the app and pushes the `dist` folder to the `gh-pages` branch. GitHub Actions also handles this automatically on push to `main`.
