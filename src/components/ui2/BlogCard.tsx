import { ArrowRight } from "lucide-react";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
};

export default function BlogCard({
  title,
  description,
  image,
  category,
}: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer max-w-md w-full">
      {/* Imagen */}
      <div className="relative h-[380px] w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay oscuro suave */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Badge */}
        <span className="absolute top-4 left-4 rounded-full bg-lime-500 px-4 py-1 text-sm font-medium text-white">
          {category}
        </span>

        {/* Glass panel */}
        <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/85 backdrop-blur-md p-6 shadow-xl">
          <h3 className="text-3xl font-semibold leading-tight text-sky-900">
            {title}
          </h3>

          <p className="mt-3 text-base leading-relaxed text-slate-700">
            {description}
          </p>

          {/* Botón */}
          <button className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-lime-500 text-white transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
