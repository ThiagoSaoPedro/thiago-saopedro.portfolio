<div align="center">

# thiago-saopedro · portfolio

Personal portfolio built with Next.js, React and TypeScript — featuring dark/light theme, EN/PT i18n, and a Linux terminal aesthetic.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/Bun-latest-fbf0df?style=flat-square&logo=bun)](https://bun.sh)

</div>

---

## Features

- **Animated terminal window** — typewriter effect that loops through commands
- **Dark / Light theme** — via `next-themes`, persists across sessions
- **EN / PT toggle** — fully translated, zero external i18n library
- **Contact form** — sends real emails powered by [Resend](https://resend.com)
- **Responsive** — mobile-first layout, collapses to a hamburger menu
- **Single-page** — smooth anchor navigation, no page reloads
- **Docker ready** — multi-stage build, non-root user, standalone output

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 · JetBrains Mono |
| Email | Resend |
| Linting | Biome 2 |
| Runtime | Bun |
| Container | Docker |

## Project Structure

```
app/
├── api/contact/route.ts   # Email API endpoint
├── layout.tsx             # Root layout with providers
├── page.tsx               # Single-page home
└── globals.css            # OKLCH theme tokens

components/
├── context/               # Theme, Language, Animation providers
├── layout/                # Navbar, Footer
├── portfolio/             # Hero, About, Experience, Skills, Contact
└── ui/                    # Button, Card, Input, Textarea

lib/
├── i18n.ts                # EN/PT translation object
└── utils.ts               # cn() class utility

env/
└── client.ts              # Type-safe environment variables (t3-env)
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) >= 1.0

### Local development

```bash
# Clone the repo
git clone https://github.com/ThiagoSaoPedro/portfolio.git
cd portfolio

# Install dependencies
bun install

# Copy environment file
cp .env.example .env

# Fill in your Resend API key
# RESEND_API_KEY="re_..."

# Start the dev server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available commands

```bash
bun run dev      # Development server with Turbopack
bun run build    # Production build
bun run start    # Production server
bun run lint     # Biome check + auto-fix
bun run format   # Biome format
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_VERSION` | No | App version displayed in footer |
| `RESEND_API_KEY` | Yes | API key from [resend.com](https://resend.com) |

## Docker

```bash
# Build and run
docker build -t portfolio:latest .
docker run -p 3000:3000 --env-file .env portfolio:latest

# Or use the helper script
chmod +x build-and-up.sh
./build-and-up.sh
```

## License

MIT — feel free to use this as a base for your own portfolio.

---

<div align="center">
  Made by <a href="https://linkedin.com/in/thiagosaopedro">Thiago São Pedro</a>
</div>
