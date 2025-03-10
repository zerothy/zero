'use client';
import { useState, useEffect } from "react";
import Loading from "./loading";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useLoadingProgress } from "@/hooks/useLoadingProgress";
import FluidTitle from "@/components/pages/FluidTitle/page";

export default function Home() {
  const { progress, isLoaded } = useLoadingProgress();
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const checkIsMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkIsMobile);
    setIsClient(true);
  }, []);

  const isWiderScreen = windowWidth >= 1024;

  if(!isClient) return null;
  if(!isLoaded) return <Loading progress={progress} />;


  return (
    <div className="w-full min-h-screen">
      { isMobile ? (
          <div className="flex justify-center items-center h-screen w-screen font-semibold">
            <h1 className="text-center font-geist">Please open this website using desktop or laptop :D</h1>
          </div>
        ) : !isWiderScreen ? (
          <div className="flex justify-center items-center h-screen w-screen font-semibold">
            <h1 className="text-center font-geist">Please open this website using wider screen :D</h1>
          </div>
        ) : (
          <FluidTitle />
        )
      }
    </div>
  );
}
