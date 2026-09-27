# Hotel Nivaara Website

Public website for Hotel Nivaara, Tirupati. The application includes rooms and tariffs, dining, banquets, facilities, gallery, attractions, contact information, and a direct booking handoff.

## Technology

- TanStack Start and React
- Vite and Tailwind CSS
- PostgreSQL-compatible hosted database for payment records
- Razorpay for payment order creation and verification

## Local development

Requirements: Bun 1.2 or newer.

```bash
bun install
cp .env.example .env
bun run dev
```

The development server runs on the URL printed in the terminal.

## Environment variables

Copy `.env.example` to `.env` and configure:

- `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` for browser-safe database access.
- `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` for server-side database access.
- `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` for payment operations.
- `NITRO_PRESET` only when deploying to a target other than the default Cloudflare module output.

Never commit `.env` or any production credential.

## Build

```bash
bun run build
```

The default production target is Cloudflare Workers. Set `NITRO_PRESET` to a Nitro-supported preset for another hosting provider.

## Content and media

Hotel photography and logos are stored under `src/assets` and bundled with the application. Public social-preview images are under `public`.

## Database

The `payments` table is used by the server-side Razorpay functions. Provision the same schema and row-level access rules in the destination database before enabling payments. Keep the service-role credential server-side only.

## Git workflow

Create feature branches, open pull requests, and protect the default branch. CI should run the build command for every pull request.