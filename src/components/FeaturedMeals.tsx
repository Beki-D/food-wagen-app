"use client";

import { ChevronRight } from "lucide-react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { FeaturedMealsProps } from "@/types";

export default function FeaturedMeals({
  foods,
  onEdit,
  onDelete,
  onLoadMore,
}: FeaturedMealsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark">
          Featured Meals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {foods.slice(0, 8).map((food, index) => (
            <FeaturedFoodCard
              key={`${food.id}-${index}`}
              food={food}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>

        {foods.length > 8 && (
          <div className="text-center">
            <button
              onClick={onLoadMore}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Load more
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
