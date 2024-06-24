import React from 'react';
import Load from '../images/Load.gif';
const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-zinc-900 flex items-center justify-center">
            
            <div className="relative">
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-center font-sans text-lg">Esperando</div>
                <div className="relative w-44 h-44 border-4 border-transparent border-t-[#d6af3a] border-b-[#d6af3a] rounded-full animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 w-36 h-36 border-4 border-transparent border-t-[#143750] border-b-[#042943] rounded-full animate-spin-slow transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-28 h-28 border-4 border-transparent border-t-[#0495ac] border-b-[#23535a] rounded-full animate-spin-fast transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
