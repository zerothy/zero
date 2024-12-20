'use client';
import { useState, useEffect } from "react";

export default function PreHero() {
    const [isNext, setIsNext] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const maskElement = document.querySelector('.ink-animate');
        if (maskElement) {
            (maskElement as HTMLElement).style.display = 'none';
            setTimeout(() => {
                (maskElement as HTMLElement).style.display = 'flex';
            }, 0);
        }

        const timer1 = setTimeout(() => {
            setIsNext(true);
            const timer2 = setTimeout(() => {
                setIsHidden(true);
            }
            , 500);
            return () => clearTimeout(timer2);
        }
        , 2500);

        return () => clearTimeout(timer1);
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden bg-background relative">
            <div className={`${isNext ? 'scale-[170%] opacity-0' : 'scale-100 opacity-100'} ${isHidden ? 'hidden' : ''} bg-primary relative ink-animate w-full h-full transition-all duration-500 ease-out flex justify-center items-center text-6xl z-0 text-white`}>
                ZERO
            </div>
        </div>
    );
}