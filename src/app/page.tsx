"use client";
import "./globals.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CityCard from "./components/CityCard";

export default function Page() {
  const [cities, setCities] = useState([])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <SearchBar onSearch={(city) => setCities([])} />
    
    </div>

  );
}
