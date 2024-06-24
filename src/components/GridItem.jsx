import React from 'react';

const GridItem = ({ id, name }) => {
  return (
    <div className="relative w-12 h-12 border border-gray-300 flex justify-center items-center">
      <img src={`images/${id}.png`} alt={name} className="max-w-full max-h-full" />
      <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 p-1 bg-black text-white rounded text-xs hidden group-hover:block">
        {name}
      </div>
    </div>
  );
};

export default GridItem;
