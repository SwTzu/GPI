import React, { useEffect, useState } from 'react';
import Selected from '../images/Logo.webp';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStrat, setSelectedStratUnits } from '../redux/actions';

const TFTCombinations = () => {
    const [combinations, setCombinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const combinationsPerPage = 3;
    const pagesToShow = 5;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api2.metatft.com/tft-stat-api/augments_full2?queue=1100&patch=current&days=2&rank=CHALLENGER,DIAMOND,GRANDMASTER,MASTER&permit_filter_adjustment=true');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const combinationsArray = Object.entries(data.results)
                    .map(([key, value]) => ({ key, ...value }))
                    .filter(combination => combination.top_units.length > 1);
                setCombinations(combinationsArray);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatKey = (key) => {
        return key.replace(/TFT\d+_Augment_/, '').replace(/([A-Z])/g, ' $1').trim();
    };

    const formatChampionName = (championName) => {
        const aux = championName.replace(/TFT\d+_/, '').trim();
        if (aux === "WuKong") return "Wukong";
        if (aux === "FortuneYord") return "Kobuko";
        if (aux === "ChoGat") return "Chogat";
        if (aux === "KhaZix") return "Khazix";
        return aux;
    };

    const selectedStrat = useSelector((state) => state.selectedStrat);
    const selectedStratUnits = useSelector((state) => state.selectedStratUnits);

    const handleCombinationClick = (units, combinationName) => {
        dispatch(setSelectedStrat(combinationName));
        dispatch(setSelectedStratUnits(units.map(champion => formatChampionName(champion.split('_')[1]))));
    };

    const indexOfLastCombination = currentPage * combinationsPerPage;
    const indexOfFirstCombination = indexOfLastCombination - combinationsPerPage;
    const currentCombinations = combinations.slice(indexOfFirstCombination, indexOfLastCombination);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const selectedComposition = (
        <div className={`bg-[#050505]  rounded border shadow-md mt-4 transition-all duration-150 ${selectedStrat ? 'border-amber-500 p-4' : ' p-4 mb-4 border-zinc-800'}`}>
            <h1 className='text-center'>{formatKey(selectedStrat)}</h1>
            {selectedStratUnits.length > 0 ? (
                <div className="mt-4 grid grid-cols-10 gap-6 ">
                    {selectedStratUnits.map((unit, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={`https://rerollcdn.com/characters/Skin/11/${unit}.png`}
                                alt={unit}
                                className="max-h-10 max-w-10"
                            />
                            <span className='text-xs'>{formatChampionName(unit)}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="opacity-30 text-center text-sm my-10">No hay ninguna composición seleccionada.</div>
            )}

        </div>
    );

    return (
        <div>
            <h1 className='font-semibold text-zinc-300'>Mejores combinaciones</h1>
            {currentCombinations.length === 0 ? (
                <p>No se encuentran combinaciones para esta página.</p>
            ) : (
                <div>
                    <ul>
                        {currentCombinations.map((combination, index) => (
                            <li key={index} className={'mt-5 p-2 cursor-pointer border-2 shadow-md hover:border-blue-400 bg-zinc-800 rounded transition-all duration-150 ' + (combination.key === selectedStrat ? 'border border-blue-400' : 'border-zinc-700 hover:border-opacity-40')} onClick={() => handleCombinationClick(combination.top_units, combination.key)}>
                                {combination.top_units.length > 0 && (
                                    <div>
                                        <div className='flex gap-5 items-center'>
                                            <div className='flex justify-center min-w-[200px]'>
                                                <h2 className='text-zinc-300 text-center text-sm font-semibold md:text-md lg:text-md'>{formatKey(combination.key)}</h2>
                                            </div>
                                            <div className="grid grid-cols-10 gap-6">
                                                {combination.top_units.map((unit, unitIndex) => (
                                                    <div key={unitIndex} className="flex flex-col items-center">
                                                        <img src={`https://rerollcdn.com/characters/Skin/11/${formatChampionName(unit.unitName ? unit.unitName : unit)}.png`} alt={`${unit.unitName}`} className="min-h-6 min-w-6" />
                                                        <span className="text-xs mt-1">{formatChampionName(unit.unitName ? unit.unitName : unit)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-center items-center h-full w-[100px] pr-3">
                                                {combination.key === selectedStrat && (
                                                    <img src={Selected} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-4">
                        {Array(Math.min(Math.ceil(combinations.length / combinationsPerPage), pagesToShow)).fill().map((_, index) => (
                            <button key={index} onClick={() => paginate(index + 1)} className={`mx-1 px-3 py-1 rounded transition-all duration-150 ${currentPage === index + 1 ? 'border bg-gray-300 text-gray-700 hover:text-gray-800 ' : 'border border-zinc-800 bg-zinc-800 text-white hover:border-zinc-700'}`}>{index + 1}</button>
                        ))}
                    </div>
                </div>
            )}
            {selectedComposition}
        </div>
    );
};

export default TFTCombinations;
