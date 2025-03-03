"use client";

import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city.trim());
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Buscar ciudad..."
        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none w-64 text-black"
      />
      <button   
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
      >
        Buscar
      </button>
    </form>
  );
}
