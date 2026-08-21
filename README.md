# URL Shortener

A full-stack URL shortener with authentication, click analytics, and QR code generation — built with React, Supabase, and Tailwind CSS.

**Live demo:** [url-shortner-98k9.onrender.com](https://url-shortner-98k9.onrender.com)

## Features

- 🔗 Shorten long URLs into short, shareable links
- 👤 User authentication (sign up / login) via Supabase Auth
- 📊 Click analytics dashboard — track visits, devices, and browsers per link
- 📱 Auto-generated QR codes for every shortened URL
- ✅ Form validation with Yup
- 🎨 Responsive UI built with shadcn/ui + Radix primitives

## Tech Stack

**Frontend:** React 19, Vite, React Router
**Backend / Database:** Supabase (Postgres + Auth + Storage)
**UI:** Tailwind CSS, shadcn/ui, Radix UI, Lucide icons
**Other libraries:** Recharts (analytics charts), ua-parser-js (device/browser detection), react-qrcode-logo (QR generation), Yup (validation)
**Deployment:** Render

## How It Works

1. A user signs up/logs in via Supabase Auth.
2. They submit a long URL (optionally with a custom alias).
3. The app generates a unique short code, stores the mapping in Supabase, and generates a QR code for it.
4. Visiting the short link redirects to the original URL and logs a click event (device, browser, timestamp) via `ua-parser-js`.
5. The dashboard visualizes click data per link using Recharts.

## Getting Started

### Prerequisites
- Node.js (v18+)
- A Supabase project (free tier works)

### Setup

```bash
# Clone the repo
git clone https://github.com/Vader-codes/URL-Shortner.git
cd URL-Shortner

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

Add your Supabase credentials to `.env`:

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_KEY=your-supabase-anon-key
```

> Note: This uses Supabase's **anon/publishable key**, which is safe to expose client-side — actual data access is controlled by Row Level Security (RLS) policies configured in Supabase, not by hiding this key.

```bash
# Run the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── components/    # Reusable UI components (shadcn/ui based)
├── pages/         # Route-level pages
├── context/       # Auth context/providers
├── db/            # Supabase client & queries
└── lib/           # Utilities and helpers
```

## Author

**Bipin** — [@Vader-codes](https://github.com/Vader-codes)
