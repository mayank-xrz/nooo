# CBSE Result Portal Replica

A two-page CBSE Results Portal replica built with Next.js 15, TypeScript, and the App Router.

The project is intentionally styled like the provided CBSE result portal screenshots, with a classic government-results layout, static pages, old-style table formatting, simple browser buttons, and no backend or database.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- App Router
- Plain global CSS
- pnpm

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Search page with roll number, school number, and admit card ID fields |
| `/result` | Protected result page shown only after valid credentials |

## Valid Credentials

Only this credential set works:

```text
Roll Number: 18611355
School Number: 99999
Admit Card ID: AI559910
```

The admit card ID check is case-insensitive, so values like `ai559910`, `Ai559910`, and `aI559910` are accepted.

Invalid credentials keep the user on the search page and show:

```text
This is not the website you are looking for. Invalid credentials.
```

## Result Data

The result page displays:

- Roll No: `18611355`
- Candidate Name: `MAYANK KUMAR`
- Mother's Name: `KUMKUM KUMAR`
- Father's Name: `SHASHI KUMAR`
- School's Name: `PRIVATE CANDIDATE`

Subjects:

| SUB CODE | SUB NAME | THEORY | PRAC./IA/Proj | MARKS | POSITIONAL GRADE |
| --- | --- | --- | --- | --- | --- |
| 043 | CHEMISTRY | 050 | 029 | 079 | |
| 041 | MATHEMATICS | 070 | 018 | 088 | |

Result strip:

```text
Result : XXXX
```

## Session Behavior

- Successful login stores temporary client-side session state in `sessionStorage`.
- Direct access to `/result` without a valid session redirects to `/`.
- Visiting or refreshing the search page clears the session.
- Clicking `Check Another Result` clears the session and returns to `/`.
- Closing the browser tab clears the session naturally because `sessionStorage` is tab-scoped.

## Project Structure

```text
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── session.ts
│   └── result
│       └── page.tsx
├── public
│   └── assets
│       └── cbse-logo.jpg
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
└── README.md
```

## Setup

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open:

```text
http://127.0.0.1:3000
```

## Verification

Type-check:

```bash
pnpm typecheck
```

Create a production build:

```bash
pnpm build
```

Both commands should pass.

## Notes

- The project is static and client-only.
- There is no backend, database, or API route.
- Styling intentionally favors screenshot authenticity over modern UI conventions.
- Next.js dev indicators are disabled in `next.config.ts` so the local page stays visually clean while testing.
