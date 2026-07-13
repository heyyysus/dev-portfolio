# "What I'm Listening To" Spotify Integration

## Context

A new section on the portfolio, placed after Projects, titled **"What I'm Listening To"**. It shows the site owner's recent top songs and artists, pulled from the Spotify Web API for their personal account. No login UI for visitors — this is a one-person site displaying one person's listening data.

## Spotify API research

**Endpoints**
- Primary: `GET https://api.spotify.com/v1/me/top/tracks` and `/v1/me/top/artists` with `time_range=short_term` (~last 4 weeks, matching "as of late"), `limit=5`. Requires OAuth scope `user-top-read`.
- Fallback: `GET /v1/me/player/recently-played?limit=50` (scope `user-read-recently-played`) — aggregate play counts server-side to derive top songs/artists if the primary endpoint is unavailable.

**Why a fallback exists:** Spotify has restricted its API twice recently:
- **November 2024** — removed catalog endpoints (artist top tracks, recommendations, related artists, audio features, etc.) for apps without Extended Quota Mode.
- **February/March 2026** — further limited Development Mode apps: new Client IDs require a Spotify Premium account, are capped at 5 authorized users, and are limited to a smaller "supported endpoints" list. *Recently Played* is confirmed supported; `/me/top/*` availability under the new restrictions couldn't be confirmed from public docs at the time of writing. Since this is a single-user personal site, the 5-user cap is a non-issue either way. The integration tries `/me/top/*` first and falls back to aggregating recently-played so it works under either policy.

**Auth model**
- One-time Authorization Code flow, run manually by the site owner, to obtain a long-lived **refresh token**.
- The site exchanges that refresh token for a short-lived access token server-side on each data fetch. No user-facing OAuth flow, no client-side secrets.
- Token refresh: `POST https://accounts.spotify.com/api/token`, `grant_type=refresh_token`, `Authorization: Basic base64(client_id:client_secret)`.

**Caching:** Server-side fetches use `next: { revalidate: 3600 }` (Next.js ISR) — at most one Spotify API call per hour regardless of visitor traffic.

## Implementation

### New files
- `src/lib/spotify.ts` — server-only helper: `getAccessToken()`, `getTopTracks()`, `getTopArtists()`. Each tries `/me/top/*` then falls back to recently-played aggregation. Returns `null` if env vars are missing or all calls fail, so the app degrades gracefully.
- `src/app/_sections/listeningSection.tsx` — async server component rendering the section, styled to match the rest of the site (dark card, `font-mono` body text). Two columns: Top Songs / Top Artists, each item linking out to its `open.spotify.com` page. Renders nothing if the lib returns `null`.
- `.env.example` — documents the three required env vars (no values).

### Edited files
- `src/app/page.tsx` — renders `<ListeningSection />` after `<ProjectsSection />`.
- `src/app/_components/nav.tsx` — adds a "Listening" nav item linking to `#listening`.

## One-time setup (site owner)

1. Create an app at [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard). Note: new Development Mode apps now require a Spotify Premium account. Set the redirect URI to `http://127.0.0.1:3000/callback` (Spotify requires a loopback IP or HTTPS).
2. Visit the authorize URL in a browser:
   ```
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://127.0.0.1:3000/callback&scope=user-top-read%20user-read-recently-played
   ```
   Approve access, then copy the `code` query param from the redirected URL.
3. Exchange the code for a refresh token:
   ```bash
   curl -X POST https://accounts.spotify.com/api/token \
     -H "Authorization: Basic $(echo -n 'YOUR_CLIENT_ID:YOUR_CLIENT_SECRET' | base64)" \
     -d grant_type=authorization_code \
     -d code=YOUR_CODE \
     -d redirect_uri=http://127.0.0.1:3000/callback
   ```
   The response's `refresh_token` field is used going forward.
4. Set `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `SPOTIFY_REFRESH_TOKEN` in `.env.local` locally, and as environment variables in the Vercel project settings for production.

## Verification

- **Without credentials** (default state of this repo): `npm run build` passes; the site renders normally with the section simply absent, no console errors.
- **With real credentials**: after the owner completes setup above, `npm run dev` shows real top songs/artists, and each links out to Spotify correctly.
