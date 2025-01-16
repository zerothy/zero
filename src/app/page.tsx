'use client';
import { useState, useEffect } from "react";
import PreHero from "@/components/pages/PreHero/page";
import Loading from "@/components/pages/Loading/page";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full min-h-screen">
      {isLoaded ? <PreHero /> : <Loading />}
    </div>
  );
}
