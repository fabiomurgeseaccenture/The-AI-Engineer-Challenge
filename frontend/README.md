# Frontend — Mental Coach AI

Chat UI built with Next.js + Tailwind CSS, integrating with the FastAPI backend.

## Setup

```bash
npm install
```

## Run locally

Make sure the backend is running first:
```bash
# From project root
uv run uvicorn api.index:app --reload --port 8000
```

Then start the frontend:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | Backend base URL |

Create a `.env.local` to override:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Build

```bash
npm run build
npm start
```
