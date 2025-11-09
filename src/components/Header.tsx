"use client";

import Image from "next/image";
import { HeaderProps } from "@/types";

const Header = ({ onAddMeal }: HeaderProps) => {
  return (
    <header className="shadow-sm bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="FoodWagen" width={28} height={30} />
          <span className="text-xl font-bold text-secondary">
            Food<span className="text-primary">Wagen</span>
          </span>
        </div>
        <button
          onClick={onAddMeal}
          className="px-9 py-2 rounded-xl font-semibold transition-colors hover:opacity-90 shadow-2xl bg-primary text-white"
        >
          Add Meal
        </button>
      </div>
    </header>
  );
};

export default Header;
