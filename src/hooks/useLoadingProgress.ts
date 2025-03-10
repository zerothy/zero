import { useState, useEffect } from 'react';

export const useLoadingProgress = () => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [resourcesLoaded, setResourcesLoaded] = useState(false);

    useEffect(() => {
        const startTime = Date.now();
        const minLoadTime = 1000;
        const endDelay = 1300;
        let animationFrame: number;

        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach(() => {
                const entries = performance.getEntriesByType('resource');
                const totalResources = entries.length;
                const loadedResources = entries.filter(entry => entry.duration > 0).length;
                if (loadedResources === totalResources) {
                    setResourcesLoaded(true);
                }
            });
        });

        observer.observe({ entryTypes: ['resource'] });

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const baseProgress = (elapsed / minLoadTime) * 100;
            const randomVariation = Math.random() * 5 - 2.5;
            const smoothProgress = Math.min(
                Math.max(0, baseProgress + randomVariation),
                resourcesLoaded ? 100 : 99
            );
            
            setProgress(Math.round(smoothProgress * 10) / 10);
            
            if (!isLoaded) {
                animationFrame = requestAnimationFrame(updateProgress);
            }
        };

        updateProgress();

        const completeLoading = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed >= minLoadTime && resourcesLoaded) {
                cancelAnimationFrame(animationFrame);
                setProgress(100);
                setTimeout(() => setIsLoaded(true), endDelay);
            } else {
                setTimeout(completeLoading, minLoadTime - elapsed);
            }
        };

        if (resourcesLoaded) {
            completeLoading();
        }

        return () => {
            cancelAnimationFrame(animationFrame);
            observer.disconnect();
        };
    }, [resourcesLoaded, isLoaded]);

    return { progress, isLoaded };
};
