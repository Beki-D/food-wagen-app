import { Food } from "@/types";

const API_BASE_URL = "https://6852821e0594059b23cdd834.mockapi.io";

export const fetchFoods = async (): Promise<Food[]> => {
  const response = await fetch(`${API_BASE_URL}/Food`);
  if (!response.ok) {
    throw new Error("Failed to fetch foods");
  }
  return response.json();
};

export const searchFoods = async (searchParam: string): Promise<Food[]> => {
  const response = await fetch(`${API_BASE_URL}/Food?name=${encodeURIComponent(searchParam)}`);
  if (!response.ok) {
    throw new Error("Failed to search foods");
  }
  return response.json();
};

export const createFood = async (foodData: Omit<Food, 'id'>): Promise<Food> => {
  const response = await fetch(`${API_BASE_URL}/Food`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(foodData),
  });
  if (!response.ok) {
    throw new Error("Failed to create food");
  }
  return response.json();
};

export const updateFood = async (id: string, foodData: Partial<Food>): Promise<Food> => {
  const response = await fetch(`${API_BASE_URL}/Food/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(foodData),
  });
  if (!response.ok) {
    throw new Error("Failed to update food");
  }
  return response.json();
};

export const deleteFood = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/Food/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error("Failed to delete food");
  }
};

export const getFoodById = async (id: string): Promise<Food> => {
  const response = await fetch(`${API_BASE_URL}/Food/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch food");
  }
  return response.json();
};
