"use client";
import React, { useEffect } from "react";
import { useCreateComeths, useCreatePlanetsPhaseTwo } from "@/hooks";

export default function Home() {
  useEffect(() => {
    const createPlanet = async () => {
      await useCreateComeths();
      await useCreatePlanetsPhaseTwo();
    };
    createPlanet();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Coding Challenge</h1>
    </main>
  );
}
