"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Clean fades with modern styling",
    image: "/slide1.jpg",
  },
  {
    id: 2,
    title: "Professional coloring for modern style",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "Professional styling for modern men",
    image: "/slide3.jpg",
  },
];

export default function Slider() {
  const [currentSlider, setCurrentSlider] = useState(0);

  // Next Slide
  const nextSlide = useCallback(() => {
    setCurrentSlider((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlider((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] overflow-hidden">
      
      {/* TEXT SECTION */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 bg-fuchsia-50 p-6 md:p-10 text-center">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black leading-tight transition-all duration-500">
          {slides[currentSlider].title}
        </h1>

        <Link href="/reserve">
          <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white rounded-xl px-6 py-3 shadow-lg font-semibold">
            Book Appointment
          </button>
        </Link>

        {/* DOTS */}
        <div className="flex items-center gap-3 mt-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlider(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlider === index
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="flex-1 relative">
        <Image
          src={slides[currentSlider].image}
          alt={slides[currentSlider].title}
          fill
          priority
          className="object-cover transition-opacity duration-700"
        />

        {/* PREVIOUS */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-12 h-12 rounded-full shadow-lg transition"
        >
          ←
        </button>

        {/* NEXT */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-12 h-12 rounded-full shadow-lg transition"
        >
          →
        </button>
      </div>
    </section>
  );
}