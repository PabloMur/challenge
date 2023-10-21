"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { APIGetPlanet } from "@/lib/APICalls";
import { useCreatePlanetsOne } from "@/hooks";

export default function Home() {
  useEffect(() => {
    const createPlanet = async () => {
      useCreatePlanetsOne();
      //await APIGetPlanet();
    };
    createPlanet();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Coding Challenge</h1>
    </main>
  );
}
