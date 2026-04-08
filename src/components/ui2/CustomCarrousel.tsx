import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CustomCarouselProps = {
  children: React.ReactNode[];
};

export default function CustomCarousel({ children }: CustomCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-md mx-auto">
      {/* Slide */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {children.map((child, index) => (
            <div key={index} className="min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute -left-12.5 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute -right-12.5 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2"
      >
        <ChevronRight />
      </button>

      {/* Puntitos */}
      <div className="flex justify-center gap-2 mt-6">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-sky-500" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
