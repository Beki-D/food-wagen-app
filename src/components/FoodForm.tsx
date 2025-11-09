"use client";

import { useState } from "react";
import { FoodFormData, FoodFormProps, FormErrors } from "@/types";

export default function FoodForm({ food, onSubmit, onCancel, isLoading = false }: FoodFormProps) {
  const [formData, setFormData] = useState<FoodFormData>({
    food_name: food?.name || "",
    food_rating: food?.rating || 1,
    food_image: food?.image || "",
    restaurant_name: food?.restaurant?.name || "",
    restaurant_logo: food?.restaurant?.logo || "",
    restaurant_status: food?.restaurant?.status || "Open Now",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Food name validation
    if (!formData.food_name.trim()) {
      newErrors.food_name = "Food name is required";
    }

    // Rating validation
    if (formData.food_rating < 1 || formData.food_rating > 5) {
      newErrors.food_rating = "Rating must be between 1 and 5";
    }

    // Image URL validation
    if (!formData.food_image.trim()) {
      newErrors.food_image = "Food image URL is required";
    } else if (!isValidUrl(formData.food_image)) {
      newErrors.food_image = "Please enter a valid image URL";
    }

    // Restaurant name validation
    if (!formData.restaurant_name.trim()) {
      newErrors.restaurant_name = "Restaurant name is required";
    }

    // Restaurant logo validation
    if (!formData.restaurant_logo.trim()) {
      newErrors.restaurant_logo = "Restaurant logo URL is required";
    } else if (!isValidUrl(formData.restaurant_logo)) {
      newErrors.restaurant_logo = "Please enter a valid logo URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData);
      // Reset form after successful submission
      setFormData({
        food_name: "",
        food_rating: 1,
        food_image: "",
        restaurant_name: "",
        restaurant_logo: "",
        restaurant_status: "Open Now",
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "food_rating" ? Number(value) : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="food-form space-y-4">
      {/* Food Name */}
      <div>
        <label htmlFor="food_name" className="block text-sm font-medium text-gray-700 mb-1">
          Food Name
        </label>
        <input
          type="text"
          id="food_name"
          name="food_name"
          value={formData.food_name}
          onChange={handleInputChange}
          placeholder="Enter food name"
          className={`food-input w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.food_name ? "border-red-500" : "border-gray-300"
          }`}
          aria-describedby={errors.food_name ? "food_name-error" : undefined}
          disabled={isLoading}
        />
        {errors.food_name && (
          <p id="food_name-error" className="text-red-500 text-sm mt-1">
            {errors.food_name}
          </p>
        )}
      </div>

      {/* Food Rating */}
      <div>
        <label htmlFor="food_rating" className="block text-sm font-medium text-gray-700 mb-1">
          Food Rating
        </label>
        <input
          type="number"
          id="food_rating"
          name="food_rating"
          min="1"
          max="5"
          step="0.1"
          value={formData.food_rating}
          onChange={handleInputChange}
          placeholder="Rate from 1 to 5"
          className={`food-input w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.food_rating ? "border-red-500" : "border-gray-300"
          }`}
          aria-describedby={errors.food_rating ? "food_rating-error" : undefined}
          disabled={isLoading}
        />
        {errors.food_rating && (
          <p id="food_rating-error" className="text-red-500 text-sm mt-1">
            {errors.food_rating}
          </p>
        )}
      </div>

      {/* Food Image */}
      <div>
        <label htmlFor="food_image" className="block text-sm font-medium text-gray-700 mb-1">
          Food Image URL
        </label>
        <input
          type="url"
          id="food_image"
          name="food_image"
          value={formData.food_image}
          onChange={handleInputChange}
          placeholder="Enter food image URL"
          className={`food-input w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.food_image ? "border-red-500" : "border-gray-300"
          }`}
          aria-describedby={errors.food_image ? "food_image-error" : undefined}
          disabled={isLoading}
        />
        {errors.food_image && (
          <p id="food_image-error" className="text-red-500 text-sm mt-1">
            {errors.food_image}
          </p>
        )}
      </div>

      {/* Restaurant Name */}
      <div>
        <label htmlFor="restaurant_name" className="block text-sm font-medium text-gray-700 mb-1">
          Restaurant Name
        </label>
        <input
          type="text"
          id="restaurant_name"
          name="restaurant_name"
          value={formData.restaurant_name}
          onChange={handleInputChange}
          placeholder="Enter restaurant name"
          className={`food-input w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.restaurant_name ? "border-red-500" : "border-gray-300"
          }`}
          aria-describedby={errors.restaurant_name ? "restaurant_name-error" : undefined}
          disabled={isLoading}
        />
        {errors.restaurant_name && (
          <p id="restaurant_name-error" className="text-red-500 text-sm mt-1">
            {errors.restaurant_name}
          </p>
        )}
      </div>

      {/* Restaurant Logo */}
      <div>
        <label htmlFor="restaurant_logo" className="block text-sm font-medium text-gray-700 mb-1">
          Restaurant Logo URL
        </label>
        <input
          type="url"
          id="restaurant_logo"
          name="restaurant_logo"
          value={formData.restaurant_logo}
          onChange={handleInputChange}
          placeholder="Enter restaurant logo URL"
          className={`food-input w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.restaurant_logo ? "border-red-500" : "border-gray-300"
          }`}
          aria-describedby={errors.restaurant_logo ? "restaurant_logo-error" : undefined}
          disabled={isLoading}
        />
        {errors.restaurant_logo && (
          <p id="restaurant_logo-error" className="text-red-500 text-sm mt-1">
            {errors.restaurant_logo}
          </p>
        )}
      </div>

      {/* Restaurant Status */}
      <div>
        <label htmlFor="restaurant_status" className="block text-sm font-medium text-gray-700 mb-1">
          Restaurant Status
        </label>
        <select
          id="restaurant_status"
          name="restaurant_status"
          value={formData.restaurant_status}
          onChange={handleInputChange}
          className="food-input w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
        >
          <option value="Open Now">Open Now</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      {/* Form Actions */}
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="food-cancel-btn flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="food-submit-btn flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
          data-test-id="food-submit-btn"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {food ? "Updating Food..." : "Adding Food..."}
            </span>
          ) : (
            food ? "Update Food" : "Add Food"
          )}
        </button>
      </div>
    </form>
  );
}