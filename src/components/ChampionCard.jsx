import React from 'react';

const ChampionCard = ({ champion }) => {
    return (
        <div className="flex flex-col items-center m-2">
            <img className="w-24 h-24 rounded-full border-2 border-black" src={champion.image} alt={champion.name} />
            <div className="mt-2 text-white text-sm">{champion.name}</div>
        </div>
    );
};

export default ChampionCard;
