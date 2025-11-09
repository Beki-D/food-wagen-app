"use client";

import { useState } from "react";
import { MoreVertical, Star, Tag } from "lucide-react";
import Image from "next/image";
import { FeaturedFoodCardProps } from "@/types";

export default function FeaturedFoodCard({
  food,
  onEdit,
  onDelete,
}: FeaturedFoodCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate random price for demo
  const price = `$${(Math.random() * 20 + 2).toFixed(2)}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100">
        {!imageError && food.image && food.image.trim() !== "" ? (
          <Image
            src={food.image}
            alt={food.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-semibold flex items-center gap-1">
          <Tag size={12} className="text-white" />
          {price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Restaurant Logo and Food Name with 3-Dot Menu */}
        <div className="flex items-center gap-2 mb-2">
          {food.restaurant?.logo && !imageError ? (
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-blue-500 flex items-center justify-center">
              <Image
                src={food.restaurant.logo}
                alt={food.restaurant.name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {food.restaurant?.name?.charAt(0) || "?"}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between flex-1">
            <span className="font-semibold text-gray-900 text-sm">
              {food.name}
            </span>

            {/* Three Dots Menu */}
            {(onEdit || onDelete) && (
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <MoreVertical size={16} className="text-gray-400" />
                </button>

                {showMenu && (
                  <div className="absolute right-5 top-1 bg-white rounded-lg shadow-lg border py-1 z-10 min-w-[100px]">
                    {onEdit && (
                      <button
                        onClick={() => {
                          onEdit(food);
                          setShowMenu(false);
                        }}
                        className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 text-gray-700"
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => {
                          onDelete(food.id);
                          setShowMenu(false);
                        }}
                        className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 text-red-600"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star size={14} className="text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600">{food.rating}</span>
        </div>

        {/* Status Badge */}
        <div className="inline-block">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              food.restaurant?.status === "Open Now"
                ? "bg-green-100 text-green-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {food.restaurant?.status === "Open Now" ? "Open" : "Closed"}
          </span>
        </div>
      </div>
    </div>
  );
}
