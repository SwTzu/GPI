import React from 'react';

export default function ChampionsSplash({champion}) {
    const baseBackgroundImageUrl = 'https://blitz-cdn.blitz.gg/blitz/tft/champion_cutouts/base.png';
    const championBackgroundImageUrl = 'https://blitz-cdn.blitz.gg/blitz/tft/champion_cutouts/set11/TFT11_' + champion + '.webp';
    const transitionValue = 'all 0.3s ease-out';

    return (
        <div
            className="relative w-64 h-64 bg-no-repeat bg-center bg-cover pointer-events-none animate-fade-out"
            style={{
                backgroundImage: `url(${baseBackgroundImageUrl})`,
                transition: transitionValue
            }}
        >
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"
                style={{ backgroundImage: `url(${championBackgroundImageUrl})` }}
            ></div>
        </div>
    );
}

