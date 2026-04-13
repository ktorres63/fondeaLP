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
    <div className="relative w-full bg-sky-200 h-72 rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition">
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Título */}
      <h3 className="absolute top-4 left-4 text-white text-lg font-semibold z-10">
        {title}
      </h3>

      {/* Card inferior */}
      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 z-10 shadow-md transition-all duration-300 group-hover:-translate-y-1">
        <div className="flex items-start gap-3">
          {/* ICONO REAL */}
          <div className="bg-sky-100 p-2 rounded-lg">
            <Icon className="w-5 h-5 text-sky-600" />
          </div>

          <div>
            <p className="text-sm text-gray-800 font-medium leading-tight">
              {description}
            </p>
            <span className="text-xs text-purple-600 font-semibold">
              {linkText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
