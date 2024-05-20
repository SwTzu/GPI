import React from 'react'
import {items} from '../data/items.js'


export default function Items() {
    const items_data = Object.values(items.data);

    return (
        <div className="grid grid-cols-5 sm:grid-cols-7  lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-2 p-2">
          {items_data.map(item => (
            <div key={item.id} className="opacity-80 flex flex-col items-center w-10 h-10 border border-zinc-600 hover:border-amber-500 transition-all duration-150 hover:opacity-100 ">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/tft-item/${item.image.full}`}
                alt={item.name}
                className="w-full"
              />
            </div>
          ))}
        </div>
      );
    };