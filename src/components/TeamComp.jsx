import React, { useState, useEffect } from 'react';
import Traits from './Traits.jsx';

import { stars, levels } from '../champions/stars';
import gold from '../images/gold.webp';

export default function TeamComp() {
    const [champions, setChampions] = useState([]);

    const emptySpaces = Array.from({ length: 10 - champions.length });

    return (
        <div className="bg-[#272727] text-white rounded-lg py-6 px-8 ">
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6">
                {champions.map(champion => (
                    <div key={champion.name} className="relative text-center justify-center items-center w-[80px] mx-auto group opacity-80 hover:opacity-100 transition-all duration-150">

                        <div className="text-xs rounded px-1 mb-1" style={{ color: levels[champion.level] }}>
                            {Array.from({ length: champion.level }).map((_, index) => (
                                <span key={index}> ★ </span>
                            ))}
                        </div>

                        <div key={champion.name} className="hexagon group relative rounded-md p-[2px]" style={{ backgroundColor: stars[champion.stars] }}>
                            <img src={champion.image} alt={champion.name} className="rounded-md w-full h-auto mx-auto" />
                        </div>
                    </div>
                ))}
            </div>
            <Traits />
        </div>
    );
}
