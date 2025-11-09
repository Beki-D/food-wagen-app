"use client";

import Image from "next/image";
import SearchBar from "./SearchBar";
import { HeroSectionProps } from "@/types";

export default function HeroSection({ onSearch }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left-side Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Are you starving?
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Within a few clicks, find meals that are accessible near you
            </p>

            <SearchBar onSearch={onSearch} />
          </div>

          {/* Right-side Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/hero-image.png"
                alt="Delicious ramen bowl"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
