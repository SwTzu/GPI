<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
=======
// src/HoneycombBoard.js
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
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58

const HoneycombBoard = () => {
  const rows = 4;
  const columns = 7;
<<<<<<< HEAD
  const champions = useSelector((state) => state.selectedStratUnits);
  const [boardChampions, setBoardChampions] = useState([]);

  useEffect(() => {
    setBoardChampions(generateRandomDistribution(champions));
  }, [champions]); 

  
  const generateRandomDistribution = (champions) => {
    const distribution = [];
    const usedPositions = new Set();
    const getRandomPosition = () => {
      let row, col;
      do {
        row = Math.floor(Math.random() * rows);
        col = Math.floor(Math.random() * columns);
      } while (usedPositions.has(`${row}-${col}`));

      usedPositions.add(`${row}-${col}`);
      return { row, col };
    };

    for (const champion of champions) {
      const { row, col } = getRandomPosition();
      distribution.push({ champion, row, col });
    }

    return distribution;
  };

  generateRandomDistribution(champions);
=======
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58

  const createBoard = () => {
    let board = [];
    for (let row = 0; row < rows; row++) {
      let currentRow = [];
      for (let col = 0; col < columns; col++) {
<<<<<<< HEAD
        const champion = boardChampions.find(champ => champ.row === row && champ.col === col);
        currentRow.push(
          <div key={`${row}-${col}`} className={`hexagon hover:opacity-100 transition-all duration-200 ${champion ? 'opacity-80' : 'opacity-30'}`}>
            {champion ? (
              <img
                src={`https://rerollcdn.com/characters/Skin/11/${champion.champion}.png`}
                alt={champion.champion}
=======
        // Buscar campeón en la posición actual
        const champion = champions.find(champ => champ.fila === row + 1 && champ.col === col + 1);
        
        currentRow.push(
          <div key={`${row}-${col}`} className="hexagon group opacity-80 hover:opacity-100 transition-all duration-150">
            {champion ? (
              <img
                src={champion.image}
                alt={champion.name}
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58
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
    <div className="flex flex-col items-center ">
<<<<<<< HEAD
=======
      <h2 className="text-xl  mb-4">Tablero Actual</h2>
>>>>>>> 149e74a1ffa880b579d88da04c8535242e3fda58
      {createBoard()}
    </div>
  );
};

export default HoneycombBoard;