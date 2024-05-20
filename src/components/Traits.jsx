import React from 'react';
import traitsData from '../data/traits.js';

export default function Traits() {
    //ordenar los rasgos de mayor a menor basado en el atributo count
    const sortedTraits = [...traitsData.traits].sort((a, b) => b.count - a.count);

    return (
        <div className="mt-6">
            {/* <h2 className="text-xl font-bold mb-2">Rasgos</h2> */}
            <div className="flex flex-wrap justify-center gap-2 text-xs items-center ">
                {sortedTraits.map(trait => (
                    <div key={trait.name} className="flex items-center gap-2 py-1 px-3 rounded-full bg-zinc-900">
                        <img src={trait.image} alt={trait.name} className="w-3 h-3" />
                        <span>{trait.name}</span>
                        <span>{trait.count}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
