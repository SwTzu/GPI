// src/OptimalFormationBoard.js
import React from 'react';

const champions = [
  {
    name: 'Annie',
    image: 'https://rerollcdn.com/characters/Skin/11/Annie.png',
    stars: 4,
    price: 4,
    level: 1,
    fila: 2,
    col: 4,
    optimalFila: 1,
    optimalCol: 3,
    traits: [
      {
        name: 'Mage',
        image: 'https://rerollcdn.com/icons/mage.png'
      },
    ],
    attackRange: '3',
    ability: {
      name: 'Orb of Deception',
      description: 'Annie sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back.',
      manaCost: 50,
      image: 'https://rerollcdn.com/abilities/11/azir-blight.png'
    }
  },
  {
    name: 'Lux',
    image: 'https://rerollcdn.com/characters/Skin/11/Lux.png',
    stars: 2,
    price: 1,
    level: 2,
    fila: 4,
    col: 3,
    optimalFila: 2,
    optimalCol: 2,
    traits: [
      {
        name: 'Glacial',
        image: 'https://rerollcdn.com/icons/glacial.png'
      },
      {
        name: 'Berserker',
        image: 'https://rerollcdn.com/icons/berserker.png'
      }
    ],
    attackRange: '1',
    ability: {
      name: 'Ragnarok',
      description: 'Olaf gains attack speed and lifesteal, becoming immune to crowd control.',
      manaCost: 70,
      image: 'https://rerollcdn.com/abilities/11/azir-blight.png'
    }
  },
  {
    name: 'Azir',
    image: 'https://rerollcdn.com/characters/Skin/11/Azir.png',
    stars: 5,
    price: 5,
    level: 3,
    fila: 4,
    col: 5,
    optimalFila: 3,
    optimalCol: 5,
    traits: [
      {
        name: 'Dryad',
        image: 'https://rerollcdn.com/icons/dryad.png'
      },
      {
        name: 'Invoker',
        image: 'https://rerollcdn.com/icons/invoker.png'
      }
    ],
    attackRange: '1',
    ability: {
      name: 'Ragnarok',
      description: 'Olaf gains attack speed and lifesteal, assd d immune to crowd control.',
      manaCost: 70,
      image: 'https://rerollcdn.com/abilities/11/azir-blight.png'
    }
  },
  // Añade más campeones aquí...
];

const OptimalFormationBoard = () => {
  const rows = 4;
  const columns = 7;

  const createBoard = () => {
    let board = [];
    for (let row = 0; row < rows; row++) {
      let currentRow = [];
      for (let col = 0; col < columns; col++) {
        // Buscar campeón en la posición óptima actual
        const champion = champions.find(champ => champ.optimalFila === row + 1 && champ.optimalCol === col + 1);
        
        currentRow.push(
          <div key={`${row}-${col}`} className="hexagon group opacity-80 hover:opacity-100 transition-all duration-150">
            {champion ? (
              <img
                src={champion.image}
                alt={champion.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200"></div> // Hexágono vacío
            )}
          </div>
        );
      }
      board.push(
        <div
          key={row}
          className="flex justify-center"
          style={{
            transform: `translateX(${row % 2 === 0 ? '3%' : '-4%'})`,
          }}
        >
          {currentRow}
        </div>
      );
    }
    return board;
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl  mb-4">Tablero recomendado</h2>
      {createBoard()}
    </div>
  );
};

export default OptimalFormationBoard;
