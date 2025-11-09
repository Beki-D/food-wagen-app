export interface Restaurant {
  name: string;
  logo: string;
  status: "Open Now" | "Closed";
}

export interface Food {
  id: string;
  name: string;
  rating: number;
  image: string;
  restaurant?: Restaurant;
}

export interface FoodFormData {
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: "Open Now" | "Closed";
}
