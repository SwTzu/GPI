import React from 'react';
import { stars, levels } from '../champions/stars';


const recommendedChampions = [
    {
        name: 'Garen',
        image: 'https://rerollcdn.com/characters/Skin/11/Garen.png',
        stars: 3,
        price: 3,
        level: 2,
        traits: [
            {
                name: 'Knight',
                image: 'https://rerollcdn.com/icons/knight.png'
            },
            {
                name: 'Noble',
                image: 'https://rerollcdn.com/icons/noble.png'
            }
        ],
        attackRange: '1',
        ability: {
            name: 'Judgment',
            description: 'Garen rapidly spins his sword around his body, dealing damage to nearby enemies.',
            manaCost: 60,
            image: 'https://rerollcdn.com/abilities/11/garen-judgment.png'
        }
    },
    {
        name: 'Ahri',
        image: 'https://rerollcdn.com/characters/Skin/11/Ahri.png',
        stars: 4,
        price: 4,
        level: 2,
        traits: [
            {
                name: 'Sorcerer',
                image: 'https://rerollcdn.com/icons/sorcerer.png'
            },
            {
                name: 'Wild',
                image: 'https://rerollcdn.com/icons/wild.png'
            }
        ],
        attackRange: '3',
        ability: {
            name: 'Spirit Rush',
            description: 'Ahri dashes forward and fires essence bolts, damaging multiple enemies.',
            manaCost: 50,
            image: 'https://rerollcdn.com/abilities/11/ahri-spirit-rush.png'
        }
    }
];

export default function RecommendedChampions() {
    return (
        <div>
            <h2 className="text-xl mt-8 mb-4">Campeones recomendados</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6">
                {recommendedChampions.map(champion => (
                    <div key={champion.name} className="relative text-center justify-center items-center w-[80px] mx-auto group opacity-80 hover:opacity-100 transition-all duration-150">
                        <div key={champion.name} className="hexagon group relative rounded-md p-[2px]" style={{ backgroundColor: stars[champion.stars] }}>
                            <img src={champion.image} alt={champion.name} className="rounded-md w-full h-auto mx-auto" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
