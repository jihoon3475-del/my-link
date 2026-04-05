# GEMINI.md

This file contains the structure, tech stack, development conventions, and key guidelines for the **MyLink** project. All future work must prioritize the instructions in this document.

## 1. Project Overview
- **Project Name:** MyLink
- **Purpose:** A profile link multiplexing service that allows users to integrate and share their portfolios, blogs, business websites, etc., in a single link.
- **Key Features:**
    - **Authentication:** Google-only login via Firebase Auth and unique URL generation based on nicknames (`domain.com/displayName`).
    - **Admin Dashboard (CMS):** Profile and link management using **Inline Edit**, allowing immediate modifications without separate modals.
    - **Public Profile Page:** Mobile-optimized pages for external sharing (maintaining mobile fixed-width layout even on PC).
    - **Automation Logic:** Automatic link icon extraction using Google Favicon API, automatic URL protocol correction (`https://`).

## 2. Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19, shadcn/ui
- **Styling:** Tailwind CSS 4, Lucide React (Icons), HugeIcons
- **Backend/Auth:** Firebase (Authentication, Firestore)
- **Language:** TypeScript
- **Package Manager:** npm

## 3. Building and Running
Key commands for running or building the project locally.
- **Run Dev Server:** `npm run dev` (using Turbopack)
- **Build Project:** `npm run build`
- **Run Production:** `npm run start`
- **Lint Check:** `npm run lint`
- **Code Formatting:** `npm run format`
- **Type Check:** `npm run typecheck`

## 4. Development Conventions

### 4.1 UI/UX Principles
- **Inline Editing:** All text in the admin dashboard (name, bio, link title, URL) must switch to an editable inline mode upon clicking.
- **Mobile-First Optimization:** The public view is designed strictly for mobile users, maintaining a mobile-fixed width (e.g., `max-w-md`) and center alignment on PC.
- **Visual Feedback:** Provide immediate feedback to users upon successful saves via Toast notifications or check icons (`✓`).

### 4.2 Architecture and Data
- **Firebase Integration:** Install the `firebase` package and complete initialization in `@lib/firebase.ts`.
- **Data Structure (Firestore):**
    - `Users` collection: `displayName`, `photoURL`, `bio`, `createdAt`
    - `Links` sub-collection: `title`, `url`, `faviconUrl`, `clickCount`, `createdAt`
- **Duplicate Prevention:** Include logic to check for `displayName` duplicates during sign-up to generate a unique slug.

### 4.3 Code Style & Communication Rules
- **TypeScript:** Strictly define types for all components and utilities to ensure type safety.
- **Components:** Place shadcn/ui components in `@components/ui` and service-logic components in `@components/`.
- **Utilities:** Separate recurring logic (URL correction, date formatting, etc.) into utility functions within `@lib/`.
- **File References:** Use the `@filename` format (e.g., `@package.json`, `@app/page.tsx`) when mentioning files in chat or documentation.

## 5. Important Notes (TODO/Issues)
- [ ] **Install Firebase:** Add required packages using `npm install firebase`.
- [ ] **Environment Variables:** Securely manage Firebase API keys and configurations in `@.env.local`.
- [ ] **Google Favicon API:** Generate icon URLs using the format `https://s2.googleusercontent.com/s2/favicons?domain=DOMAIN` when saving links.
