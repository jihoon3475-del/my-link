# GEMINI.md

## Project Overview
**Project Name:** `my-profile` (part of `my-link`)
**Core Technologies:** Next.js (App Router), React, TypeScript, Tailwind CSS.
**Architecture:** This is a modern web application built with Next.js 15+ and React 19. It uses the App Router architecture for routing and layouts. Styling is handled via Tailwind CSS 4.

The project is structured with a main application directory `my-profile/app` which contains the following:
- `layout.tsx`: Root layout defining the HTML structure and global fonts (Geist).
- `page.tsx`: The main landing page.
- `globals.css`: Global CSS and Tailwind directives.

## Building and Running
All commands should be run from within the `my-profile` directory.

- **Development:** `npm run dev` - Starts the development server at `http://localhost:3000`.
- **Build:** `npm run build` - Creates an optimized production build in the `.next` folder.
- **Production Start:** `npm run start` - Starts the production server after building.
- **Linting:** `npm run lint` - Runs ESLint to check for code quality and potential issues.

## Development Conventions
- **TypeScript:** Strict type checking is enabled. Use interfaces or types for all component props and data structures.
- **App Router:** Follow Next.js App Router conventions. Place page components in `page.tsx` within their respective route directories.
- **Styling:** Use Tailwind CSS for component styling. Prefer utility classes over custom CSS.
- **Path Aliases:** Use the `@/*` alias to refer to files relative to the `my-profile` directory (e.g., `import { ... } from "@/app/components/..."`).
- **Fonts:** The Geist and Geist Mono fonts are integrated via `next/font/google` and should be used via CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- **ESLint:** The project uses a custom ESLint configuration (`eslint.config.mjs`) based on Next.js vitals and TypeScript rules.

## Key Files & Directories
- `my-profile/app/`: Contains the application's pages, layouts, and global styles.
- `my-profile/public/`: Static assets like images and SVGs.
- `my-profile/next.config.ts`: Next.js configuration.
- `my-profile/tsconfig.json`: TypeScript configuration.
- `my-profile/package.json`: Project dependencies and scripts.
