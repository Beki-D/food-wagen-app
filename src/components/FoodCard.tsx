"use client";

import { Food } from "@/types";
import Image from "next/image";

interface FoodCardProps {
  food: Food;
  onEdit?: (food: Food) => void;
  onDelete?: (id: string) => void;
}

export default function FoodCard({ food, onEdit, onDelete }: FoodCardProps) {
  return (
    <div className="food-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-150 ease-out hover:scale-105 hover:shadow-xl animate-slide-up">
      <div className="relative">
        {food.image && food.image.trim() !== "" ? (
          <Image
            src={food.image}
            alt={food.name}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="food-name text-xl font-semibold text-gray-800 mb-2">
          {food.name}
        </h3>
        
        <div className="food-rating flex items-center mb-3">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-gray-700">{food.rating}</span>
        </div>

        {food.restaurant ? (
          <div className="restaurant-info border-t pt-3">
            <div className="flex items-center mb-2">
              {food.restaurant.logo && food.restaurant.logo.trim() !== "" ? (
                <Image
                  src={food.restaurant.logo}
                  alt={food.restaurant.name}
                  width={24}
                  height={24}
                  className="restaurant-logo w-6 h-6 rounded-full mr-2"
                />
              ) : (
                <div className="restaurant-logo w-6 h-6 rounded-full mr-2 bg-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-600">?</span>
                </div>
              )}
              <span className="restaurant-name text-gray-700 font-medium">
                {food.restaurant.name}
              </span>
            </div>
            <span className={`restaurant-status text-sm px-2 py-1 rounded-full ${
              food.restaurant.status === "Open Now" 
                ? "bg-green-100 text-green-800" 
                : "bg-red-100 text-red-800"
            }`}>
              {food.restaurant.status}
            </span>
          </div>
        ) : (
          <div className="restaurant-info border-t pt-3">
            <span className="text-gray-500 text-sm">No restaurant information</span>
          </div>
        )}

        {(onEdit || onDelete) && (
          <div className="flex gap-2 mt-4">
            {onEdit && (
              <button
                onClick={() => onEdit(food)}
                className="food-edit-btn flex-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
                data-test-id="food-edit-btn"
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(food.id)}
                className="food-delete-btn flex-1 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors"
                data-test-id="food-delete-btn"
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}