export interface SpotifyItem {
    name: string;
    subtitle?: string;
    image?: string;
    url: string;
}

interface SpotifyTrack {
    name: string;
    external_urls: { spotify: string };
    album: { images: { url: string }[] };
    artists: { name: string }[];
}

interface SpotifyArtist {
    name: string;
    external_urls: { spotify: string };
    images: { url: string }[];
}

interface RecentlyPlayedItem {
    track: SpotifyTrack;
}

const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const API_BASE = 'https://api.spotify.com/v1';

async function getAccessToken(): Promise<string | null> {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
        return null;
    }

    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    try {
        const res = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${basicAuth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
            }),
            cache: 'no-store',
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data.access_token ?? null;
    } catch {
        return null;
    }
}

async function fetchFromSpotify(path: string, accessToken: string) {
    try {
        const res = await fetch(`${API_BASE}${path}`, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
            next: { revalidate: 3600 },
        });

        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
}

async function getRecentlyPlayed(accessToken: string): Promise<RecentlyPlayedItem[] | null> {
    const data = await fetchFromSpotify('/me/player/recently-played?limit=50', accessToken);
    return data?.items ?? null;
}

function trackToItem(track: SpotifyTrack): SpotifyItem {
    return {
        name: track.name,
        subtitle: track.artists.map((a) => a.name).join(', '),
        image: track.album.images?.[0]?.url,
        url: track.external_urls.spotify,
    };
}

function topTracksFromRecentlyPlayed(items: RecentlyPlayedItem[]): SpotifyItem[] {
    const counts = new Map<string, { track: SpotifyTrack; count: number }>();

    for (const { track } of items) {
        const existing = counts.get(track.name);
        if (existing) {
            existing.count += 1;
        } else {
            counts.set(track.name, { track, count: 1 });
        }
    }

    return Array.from(counts.values())
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
        .map(({ track }) => trackToItem(track));
}

function topArtistsFromRecentlyPlayed(items: RecentlyPlayedItem[]): SpotifyItem[] {
    const counts = new Map<string, number>();

    for (const { track } of items) {
        const artistName = track.artists[0]?.name;
        if (!artistName) continue;
        counts.set(artistName, (counts.get(artistName) ?? 0) + 1);
    }

    return Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name]) => ({ name, url: '#' }));
}

export async function getTopTracks(): Promise<SpotifyItem[] | null> {
    const accessToken = await getAccessToken();
    if (!accessToken) return null;

    const primary = await fetchFromSpotify('/me/top/tracks?time_range=short_term&limit=5', accessToken);
    if (primary?.items?.length) {
        return (primary.items as SpotifyTrack[]).map(trackToItem);
    }

    const recentlyPlayed = await getRecentlyPlayed(accessToken);
    if (!recentlyPlayed?.length) return null;

    return topTracksFromRecentlyPlayed(recentlyPlayed);
}

export async function getTopArtists(): Promise<SpotifyItem[] | null> {
    const accessToken = await getAccessToken();
    if (!accessToken) return null;

    const primary = await fetchFromSpotify('/me/top/artists?time_range=short_term&limit=5', accessToken);
    if (primary?.items?.length) {
        return (primary.items as SpotifyArtist[]).map((artist) => ({
            name: artist.name,
            image: artist.images?.[0]?.url,
            url: artist.external_urls.spotify,
        }));
    }

    const recentlyPlayed = await getRecentlyPlayed(accessToken);
    if (!recentlyPlayed?.length) return null;

    return topArtistsFromRecentlyPlayed(recentlyPlayed);
}
