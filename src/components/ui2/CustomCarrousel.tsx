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
    <div className="relative max-w-sm mx-auto">
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

      {/* Flechas */}
      {[
        { side: "left", fn: prev, Icon: ChevronLeft },
        { side: "right", fn: next, Icon: ChevronRight },
      ].map(({ side, fn, Icon }) => (
        <button
          key={side}
          onClick={fn}
          className={`absolute ${side === "left" ? "-left-12" : "-right-12"} top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md
              flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition-all`}
        >
          <Icon size={18} className="text-slate-600" />
        </button>
      ))}
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 border-none
              ${current === i ? "w-5 bg-[#00A1CD]" : "w-2 bg-slate-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
