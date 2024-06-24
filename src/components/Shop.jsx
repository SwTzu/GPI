import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedStrat, setSelectedStratUnits } from '../redux/actions';
import Gold from '../images/gold.webp';
import Voice from '../voice_detection/Voice';

const Shop = () => {
    const [data, setData] = useState({
        gold: 0,
        round: [],
        shop: {}
    });
    const [noData, setNoData] = useState(false);
    const selectedStrat = useSelector((state) => state.selectedStratUnits);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
                if (!result.shop || Object.keys(result.shop).length === 0) {
                    setNoData(true);
                } else {
                    setNoData(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setNoData(true);
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleBuyChampion = useCallback((championName) => {
        console.log(championName)
        const champion = Object.values(data.shop).find(champ => champ.Name === championName.champion);
        if (champion) {
            dispatch(setSelectedStrat(champion.Name));
            dispatch(setSelectedStratUnits([...selectedStrat, champion.Name]));
            alert(`Compraste a ${championName.champion}`);
        } else {
            alert(`No se encontró a ${championName.champion} en la tienda`);
        }
    }, [data.shop, dispatch, selectedStrat]);

    const { shop } = data;
    const shopArray = Array(5).fill(null);

    if (shop && Object.keys(shop).length > 0) {
        Object.keys(shop).forEach(key => {
            shopArray[parseInt(key, 10)] = shop[key];
        });
    }


    
    return (
        <div className=''>
            <Voice onBuyChampion={handleBuyChampion} />
            <div className='flex justify items-center bg-[#0e1315]   justify-between p-3 h-12 rounded-tl rounded-tr border-t border-l border-r border-zinc-600'>
                <div className='flex items-center gap-4 justify-be'>
                    <div className='flex'>
                        <span>Nivel {data.level}</span>
                    </div>

                    <div className='flex gap-1'>
                        <img src={Gold} className='w-6'></img>
                        <span>{data.gold}</span>
                    </div>


                </div>

                <div className='flex gap-2' style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='https://i.pinimg.com/originals/50/b4/c1/50b4c1386c86dfebd1f61706c03a4c81.png' className='w-6' alt='health icon' />
                    <progress value={data.health} max="100" className='rounded'></progress>
                    <span>{data.health} / 100</span>
                </div>


            </div>
            <div className='bg-[#0e1315] rounded border border-zinc-600 p-3'>
                <div className="bg-[#0e1315] grid grid-cols-5 gap-4 mx-auto md:grid-cols-5 lg:grid-cols-5 lg:mx-[120px]">
                    {(noData
                        ? Array(5).fill(null)
                        : Array.from({ length: 5 }, (_, index) => shopArray[index] || null)
                    ).map((champion, index) => (
                        <div key={index} className="relative text-center justify-center items-center w-full md:w-[80px] mx-auto group transition-all duration-150">
                            {champion ? (
                                <div className={`hover:border-zinc-400 hover:opacity-80 transition-all duration-150 rounded-md p-[2px] ${selectedStrat.includes(champion.Name) ? 'border ring ring-amber-500 ring-opacity-50 transition-all duration-300' : 'border border-black opacity-70'}`}>
                                    <img src={`https://rerollcdn.com/characters/Skin/11/${champion.Name}.png`} alt={champion.Name} className="rounded-md w-full h-auto mx-auto" />
                                </div>
                            ) : (
                                <div className="h-[80px] bg-zinc-900 border-2 border-zinc-600"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Shop;
