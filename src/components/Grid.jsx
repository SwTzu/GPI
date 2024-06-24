import React from 'react';
import GridItem from './GridItem';

const Grid = () => {
  const gridItems = [
    { id: 'gnar', name: 'Gnar' },
    { id: 'sett', name: 'Sett' },
    { id: 'thresh', name: 'Thresh' },
    { id: 'ornn', name: 'Ornn' },
    { id: 'annie', name: 'Annie' },
    { id: 'syndra', name: 'Syndra' },
    { id: 'ahri', name: 'Ahri' },
    { id: 'kindred', name: 'Kindred' },
    { id: 'azir', name: 'Azir' },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid grid-cols-9 gap-2">
        {gridItems.map((item) => (
          <GridItem key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
      <div className="mt-8">
        <ul className="list-none p-0">
          <li>Blue Buff</li>
          <li>Jeweled Gauntlet</li>
          <li>Nashor's Tooth</li>
          <li>Ionic Spark</li>
          <li>Sunfire Cape</li>
          <li>Gargoyle Stoneplate</li>
          <li>Spear of Shojin</li>
          <li>Giant Slayer</li>
          <li>Bloodthirster</li>
          <li>Titan's Resolve</li>
        </ul>
      </div>
    </div>
  );
};

export default Grid;
