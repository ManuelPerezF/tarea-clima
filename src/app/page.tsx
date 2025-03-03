"use client";
import "./globals.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CityCard from "./components/CityCard";

export default function Page() {
  const [cities, setCities] = useState([])

  return (
    <div className="flex flex-col items-center justify-top min-h-screen py-2">
      <h1 className="text-4xl font-bold text-center py-4">Aplicacion Clima</h1>
      <SearchBar onSearch={(city) => setCities([])} />
    
    </div>

  );
}
