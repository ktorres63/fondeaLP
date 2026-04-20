import type { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  title: string;
  image: string;
  description: string;
  linkText: string;
  icon: LucideIcon;
};

export default function BenefitCard({
  title,
  image,
  description,
  linkText,
  icon: Icon,
}: BenefitCardProps) {
  return (
    <div className="relative w-full bg-cyan-200 h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 group-hover:from-black/30 group-hover:to-black/50 transition-all duration-300" />

      {/* Título */}
      <h3 className="absolute top-4 left-4 text-white text-lg font-bold z-10 drop-shadow-md">
        {title}
      </h3>

      {/* Card inferior */}
      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 z-10 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="flex items-start gap-3">
          {/* ICONO REAL */}
          <div className="bg-cyan-100 p-2 rounded-lg group-hover:bg-[#00a9e0] transition-colors duration-300">
            <Icon className="w-5 h-5 text-[#00a9e0] group-hover:text-white transition-colors duration-300" />
          </div>

          <div>
            <p className="text-sm text-gray-800 font-medium leading-tight">
              {description}
            </p>
            <span className="text-xs text-[#00a9e0] font-bold">
              {linkText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
