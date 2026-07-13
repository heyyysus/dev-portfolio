import { FC } from 'react';
import { getTopArtists, getTopTracks, SpotifyItem } from '../../lib/spotify';

export interface ListeningSectionProps {};

const ListeningColumn: FC<{ title: string; items: SpotifyItem[] }> = ({ title, items }) => (
    <div>
        <h2 className="text-lg font-bold text-green mb-4 font-mono">{title}</h2>
        <ul className="flex flex-col gap-3">
            {items.map((item, index) => (
                <li key={index}>
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-3 hover:opacity-70 transition-opacity"
                    >
                        <div className="w-10 h-10 bg-grey rounded-md flex-shrink-0 overflow-hidden">
                            {item.image && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                            )}
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm text-white font-mono truncate">{item.name}</p>
                            {item.subtitle && (
                                <p className="text-xs text-grey font-mono truncate">{item.subtitle}</p>
                            )}
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export const ListeningSection = async ({}: ListeningSectionProps) => {
    const [topTracks, topArtists] = await Promise.all([getTopTracks(), getTopArtists()]);

    if (!topTracks?.length && !topArtists?.length) {
        return null;
    }

    return (
        <div
            id="listening"
            className="flex flex-row justify-center items-center bg-white min-h-screen w-full">
            <div className="font-sans md:w-[700px] w-[90vw] p-10 bg-blue-dark rounded-md">
                <h1 className="text-2xl font-bold text-white mb-8 animate-fadeInFast">
                    What I&apos;m Listening To
                </h1>
                <div className="grid md:grid-cols-2 gap-10">
                    {topTracks?.length ? (
                        <ListeningColumn title="Top Songs" items={topTracks} />
                    ) : null}
                    {topArtists?.length ? (
                        <ListeningColumn title="Top Artists" items={topArtists} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};
