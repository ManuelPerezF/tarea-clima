"use client";

import React from "react";

interface CityWeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
  };
}

interface CityCardProps {
  data: CityWeatherData;
  removeCity: (cityName: string) => void;
}

export default function CityCard({ data, removeCity }: CityCardProps) {
  const { location, current } = data;

  return (
    <div className="bg-blue-400 rounded shadow p-4 relative">
      <button
        onClick={() => removeCity(location.name)}
        className="absolute top-1 right-1 text-red-500 hover:text-red-800"
      >
        X
      </button>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-4xl text-grey-800 font-semibold">{location.name}</h2>
        <p className="text-4xl font-bold text-yellow-400 ">{current.temp_c}°C</p>
      </div>
    </div>
  );
}