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

export interface FoodCardProps {
  food: Food;
  onEdit?: (food: Food) => void;
  onDelete?: (id: string) => void;
}

export interface FoodFormProps {
  food?: Food;
  onSubmit: (data: FoodFormData) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export interface FormErrors {
  food_name?: string;
  food_rating?: string;
  food_image?: string;
  restaurant_name?: string;
  restaurant_logo?: string;
  restaurant_status?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}
