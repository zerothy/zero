"use client";
import { useState, useEffect } from "react";

export default function FluidTitle() {
    const [visible, setVisible] = useState(false);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        const timer2 = setTimeout(() => setIsDone(true), 2500);
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        }
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden bg-white relative">
            <div 
                className={`font-neue-montreal font-light bg-white text-black relative ink-transition z-0 w-full h-full transition-all duration-500 ease-out flex justify-center items-center text-3xl ${visible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 0.3s ease-in-out' }}
            >
                <div className="overflow-hidden w-max h-16 flex justify-center items-center">
                    <span className={`${isDone ? 'translate-y-16' : 'translate-y-0'} transition-all duration-[800ms] ease-out`}>Z</span>
                    <span className={`${isDone ? '-translate-y-16' : 'translate-y-0'} transition-all duration-[800ms] ease-out`}>E</span>
                    <span className={`${isDone ? 'translate-y-16' : 'translate-y-0'} transition-all duration-[800ms] ease-out`}>R</span>
                    <span className={`${isDone ? '-translate-y-16' : 'translate-y-0'} transition-all duration-[800ms] ease-out`}>O</span>
                </div>
            </div>
        </div>
    );
}