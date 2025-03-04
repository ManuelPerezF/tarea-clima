'use client';
import React, { useState } from "react";

export interface WeatherData {
    location: {
      name: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
      };
    };
  }
  
  interface CityCardProps {
    city: string;
    temperature: number;
    onRemove: () => void;
  }

  export default function CityCard({ city, temperature, onRemove }: CityCardProps) {
    return (
      <div className="bg-blue-400 rounded shadow p-4 relative mx-auto my-2 max-w-md">
        <button
          onClick={onRemove}
          className="absolute top-1 right-1 text-red-500 hover:text-red-800 width-4 height-4 bg-white"
        >
          X
        </button>
        <div className="flex justify-between items-center mb-2 ">
          <h2 className="text-4xl text-grey-800 font-semibold">{city}</h2>
          <p className="text-4xl font-bold text-yellow-400">{temperature}°C</p>
        </div>
      </div>
    );
  }