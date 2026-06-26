# Frontend Redesign — Parchment

**Date:** 2026-06-26  
**Stack:** Next.js 16, Tailwind CSS, TypeScript, Geist font  
**Scope:** `frontend/app/page.tsx` + `frontend/app/globals.css`

## Goal

Elevate the Mental Coach AI chat UI with a warm, boutique-wellness aesthetic. Single file change — no new components.

## Design Decisions

- **Mood:** Warm & Calm (wellness boutique)
- **Typography:** Geist, kept as-is but with refined tracking/spacing
- **Layout:** Max-width 680px centered, generous whitespace

## Color Palette

| Token | Value | Usage |
|---|---|---|
| parchment | `#faf7f2` | App background |
| surface | `#ffffff` | Bubbles, header, footer |
| warm-brown | `#3d2c1e` | Primary text |
| muted-brown | `#8a7060` | Secondary text, placeholders |
| terracotta | `#c4714a` | User bubble, send button, focus ring |
| terracotta-dark | `#a85c38` | Hover state |
| border | `#e8e0d5` | Dividers, bubble borders |
| input-bg | `#f5f0e8` | Textarea background |

## Components

### Header
- Gradient background `#fdf9f4 → #f0e6d8`
- Avatar: warm circle (`bg-[#f0e6d8]`) with 🧘 emoji centered
- Title: Geist Medium, `tracking-wide`, warm-brown
- Subtitle: uppercase, `tracking-widest`, xs, muted-brown

### Message Bubbles
- Max-width `680px` centered via `max-w-2xl mx-auto`
- User: `bg-[#c4714a] text-white rounded-2xl rounded-br-sm`, padding `px-5 py-3`
- Coach: `bg-white border border-[#e8e0d5] rounded-2xl rounded-bl-sm shadow-sm`, text warm-brown
- Max-width per bubble: `75%`

### Loading Indicator
- Three dots in terracotta `text-[#c4714a]` with opacity-60
- `animate-bounce` with staggered delays

### Input Area
- Outer container: `bg-white border-t border-[#e8e0d5]`
- Inner wrapper: `bg-[#f5f0e8] rounded-full border border-[#e8e0d5]` with `shadow-md`
- Textarea: transparent background, no border, `rounded-full`, warm-brown text
- Send button: circle `w-9 h-9`, `bg-[#c4714a]` → hover `bg-[#a85c38]`, arrow-up icon (↑) in white

## Files to Modify

- `frontend/app/page.tsx` — full rewrite of JSX/className only, logic unchanged
- `frontend/app/globals.css` — update CSS variables to warm palette
