# Adriano Brandão — Portfolio

A personal portfolio built with React, Vite, and React Router. The site content is in English and is structured for future growth.

## Project structure

```text
src/
├── app/                  # Application shell and route definitions
├── components/
│   ├── layout/           # Shared header, footer, site layout
│   └── ui/               # Small reusable UI components
├── features/
│   └── projects/         # Project data and project UI
├── pages/                # Route-level pages
├── data/                 # Shared content data (future)
└── styles/               # Design tokens, global, layout, components, responsive
```

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Before publishing

- Add professional email and actual GitHub/LinkedIn URLs.
- Add your English resume PDF under `public/assets/` and link it from the Resume page.
- Update project descriptions/statuses to reflect the current implementation.
- Add project detail routes and case studies when ready.
- Keep production business data, credentials, and private company information out of the public repository.
