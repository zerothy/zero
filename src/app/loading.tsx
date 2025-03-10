'use client';
import { useState, useEffect } from 'react';

interface LoadingProps {
    progress: number;
}

export default function Loading({ progress = 0 }: LoadingProps) {
    const [opacity, setOpacity] = useState(1);
    const safeProgress = Math.min(100, Math.max(0, Math.round(progress)));

    useEffect(() => {
        if (safeProgress >= 100) {
            setTimeout(() => setOpacity(0), 1000);
        }
    }, [safeProgress]);

    const hundreds = Math.floor(safeProgress / 100);
    const tens = Math.floor((safeProgress % 100) / 10);
    const ones = safeProgress % 10;

    return (
        <div 
            className="w-full h-screen flex flex-col gap-4 justify-center items-center font-neue-montreal bg-white z-[120]"
            style={{
                opacity,
                transition: 'opacity 0.4s ease-out',
                pointerEvents: opacity === 0 ? 'none' : 'auto'
            }}
        >
            <div className="w-[3rem] h-[1.4rem] justify-center items-center flex">
                <span className="w-[0.6rem] text-center h-[1.4rem] overflow-hidden">
                    <div
                        className="transition-transform duration-300"
                        style={{ transform: hundreds === 1 ? 'translateY(-1.4rem)' : 'translateY(0)' }}
                    >
                        <div className="h-[1.4rem] flex items-center justify-center">
                        </div>
                        <div className="h-[1.4rem] flex items-center justify-center">
                            1
                        </div>
                    </div>
                </span>
                
                <span className="w-[0.6rem] text-center overflow-hidden h-[1.4rem]">
                    <div 
                        className="transition-transform duration-300" 
                        style={{ transform: `translateY(-${tens * 1.4}rem)` }}
                    >
                        {Array.from({ length: 10 }, (_, i) => (
                            <div key={i} className="h-[1.4rem] flex items-center justify-center">
                                {i}
                            </div>
                        ))}
                    </div>
                </span>
                
                <span className="w-[0.6rem] text-center overflow-hidden h-[1.4rem]">
                    <div
                        className="transition-transform duration-300"
                        style={{ transform: `translateY(-${ones * 1.4}rem)` }}
                    >
                        {Array.from({ length: 10 }, (_, i) => (
                            <div key={i} className="h-[1.4rem] flex items-center justify-center">
                                {i}
                            </div>
                        ))}
                    </div>
                </span>
                
                <span className="w-[0.6rem] text-center">
                    %
                </span>
            </div>
        </div>
    );
}