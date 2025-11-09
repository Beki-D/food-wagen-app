"use client";

import { useState } from "react";
import { Motorbike, Handbag, Search } from "lucide-react";
import { SearchBarProps } from "@/types";

export default function SearchBar({
  onSearch,
  placeholder = "What do you like to eat today?",
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery"
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      {/* Delivery/Pickup Toggle */}
      <div className="flex mb-6">
        <button
          onClick={() => setDeliveryType("delivery")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            deliveryType === "delivery"
              ? "text-tertiary bg-orange-50"
              : "text-gray-600 hover:text-tertiary"
          }`}
        >
          <Motorbike size={20} />
          Delivery
        </button>
        <button
          onClick={() => setDeliveryType("pickup")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            deliveryType === "pickup"
              ? "text-tertiary bg-orange-50"
              : "text-gray-600 hover:text-tertiary"
          }`}
        >
          <Handbag size={20} />
          Pickup
        </button>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
        >
          <Search size={20} />
          Find Meal
        </button>
      </form>
    </div>
  );
}
