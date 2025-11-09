"use client";

import { useState, useEffect } from "react";
import { fetchFoods, searchFoods, createFood, updateFood, deleteFood } from "@/lib/api";
import { Food, FoodFormData } from "@/types";
import FoodCard from "@/components/FoodCard";
import SearchBar from "@/components/SearchBar";
import Modal from "@/components/Modal";
import FoodForm from "@/components/FoodForm";

export default function Home() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingFood, setEditingFood] = useState<Food | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFoods();
      // Remove duplicates based on ID
      const uniqueFoods = data.filter((food, index, self) => 
        index === self.findIndex(f => f.id === food.id)
      );
      setFoods(uniqueFoods);
    } catch (err) {
      setError("Failed to load foods. Please try again.");
      console.error("Error loading foods:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = query.trim() ? await searchFoods(query) : await fetchFoods();
      // Remove duplicates based on ID
      const uniqueFoods = data.filter((food, index, self) => 
        index === self.findIndex(f => f.id === food.id)
      );
      setFoods(uniqueFoods);
    } catch (err) {
      setError("Failed to search foods. Please try again.");
      console.error("Error searching foods:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFood = async (formData: FoodFormData) => {
    try {
      setIsSubmitting(true);
      const newFood: Omit<Food, 'id'> = {
        name: formData.food_name,
        rating: formData.food_rating,
        image: formData.food_image,
        restaurant: {
          name: formData.restaurant_name,
          logo: formData.restaurant_logo,
          status: formData.restaurant_status,
        },
      };
      
      const createdFood = await createFood(newFood);
      setFoods(prev => [createdFood, ...prev]);
      setIsAddModalOpen(false);
    } catch (err) {
      console.error("Error adding food:", err);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditFood = async (formData: FoodFormData) => {
    if (!editingFood) return;
    
    try {
      setIsSubmitting(true);
      const updatedFood: Partial<Food> = {
        name: formData.food_name,
        rating: formData.food_rating,
        image: formData.food_image,
        restaurant: {
          name: formData.restaurant_name,
          logo: formData.restaurant_logo,
          status: formData.restaurant_status,
        },
      };
      
      const updated = await updateFood(editingFood.id, updatedFood);
      setFoods(prev => prev.map(food => food.id === editingFood.id ? updated : food));
      setIsEditModalOpen(false);
      setEditingFood(null);
    } catch (err) {
      console.error("Error updating food:", err);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteFood = async (id: string) => {
    if (!confirm("Are you sure you want to delete this food item?")) {
      return;
    }
    
    try {
      await deleteFood(id);
      setFoods(prev => prev.filter(food => food.id !== id));
    } catch (err) {
      setError("Failed to delete food. Please try again.");
      console.error("Error deleting food:", err);
    }
  };

  const openEditModal = (food: Food) => {
    setEditingFood(food);
    setIsEditModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">FoodWagen</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="food-add-btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          data-test-id="food-add-btn"
        >
          Add Food
        </button>
      </div>

      <SearchBar onSearch={handleSearch} />

      {error && (
        <div className="food-error">
          {error}
        </div>
      )}

      {loading ? (
        <div className="food-loading">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-gray-600">Loading foods...</span>
        </div>
      ) : (
        <div className="food-grid">
          {foods.length > 0 ? (
            foods.map((food, index) => (
              <FoodCard
                key={`${food.id}-${index}`}
                food={food}
                onEdit={openEditModal}
                onDelete={handleDeleteFood}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No foods found</p>
              <p className="text-gray-400">Try adjusting your search or add a new food item</p>
            </div>
          )}
        </div>
      )}

      {/* Add Food Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Food"
      >
        <FoodForm
          onSubmit={handleAddFood}
          onCancel={() => setIsAddModalOpen(false)}
          isLoading={isSubmitting}
        />
      </Modal>

      {/* Edit Food Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingFood(null);
        }}
        title="Edit Food"
      >
        {editingFood && (
          <FoodForm
            food={editingFood}
            onSubmit={handleEditFood}
            onCancel={() => {
              setIsEditModalOpen(false);
              setEditingFood(null);
            }}
            isLoading={isSubmitting}
          />
        )}
      </Modal>
    </div>
  );
}
