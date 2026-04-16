import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CustomCarouselProps = {
  children: React.ReactNode[];
};

export default function CustomCarousel({ children }: CustomCarouselProps) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((p) => (p === 0 ? children.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === children.length - 1 ? 0 : p + 1));

  return (
    <div className="relative w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-0 md:px-14">
      {/* Slide track */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {children.map((child, i) => (
            <div key={i} className="min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Flechas — a los lados en md+, debajo centradas en móvil */}
      <div className="flex items-center justify-center gap-4 mt-5 md:mt-0">
        {/* Flecha izquierda — absoluta en md+, inline en móvil */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="
            md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2
            w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md
            flex items-center justify-center hover:bg-slate-50 hover:scale-105
            transition-all shrink-0
          "
        >
          <ChevronLeft size={18} className="text-slate-600" />
        </button>

        {/* Dots — centrados, inline en móvil / absolutos-virtuales en md+ */}
        <div className="flex items-center justify-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-8">
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a diapositiva ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 border-none
                ${current === i ? "w-5 bg-[#00A1CD]" : "w-2 bg-slate-300"}`}
            />
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={next}
          aria-label="Siguiente"
          className="
            md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2
            w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md
            flex items-center justify-center hover:bg-slate-50 hover:scale-105
            transition-all shrink-0
          "
        >
          <ChevronRight size={18} className="text-slate-600" />
        </button>
      </div>
    </div>
  );
}
