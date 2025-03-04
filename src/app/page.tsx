"use client";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CityCard from "./components/CityCard";
import { useWeatherApi } from './components/useWeatherApi';
import { WeatherData } from './components/CityCard';

export default function HomePage() {
  const { cities, fetchWeather, setCities } = useWeatherApi();

  const handleSearch = async (city: string) => {
    await fetchWeather(city);
  };

  const handleRemove = (index: number) => {
    setCities(cities.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-4 py-4">Aplicacion Clima</h1>
      <SearchBar onSearch={handleSearch} />
      {cities.map((data: WeatherData, index: number) => (
        <CityCard
          key={index}
          city={data.location.name}
          temperature={data.current.temp_c}
          onRemove={() => handleRemove(index)}
        />
      ))}
    </div>
  );
} 