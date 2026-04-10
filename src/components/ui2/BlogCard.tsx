import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
};

export default function BlogCard({
  title,
  description,
  image,
  category,
  slug,
}: BlogCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${slug}`);
  };

  return (
    <article
      onClick={handleClick}
      className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer max-w-md w-full"
    >
      <div className="relative h-95 w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/15" />

        <span className="absolute top-4 left-4 rounded-full bg-lime-500 px-4 py-1 text-sm font-medium text-white">
          {category}
        </span>

        <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/60 backdrop-blur-md p-4 shadow-xl min-h-40 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-sky-900 line-clamp-2">
              {title}
            </h3>

            <p className="mt-3 text-sm text-slate-700 line-clamp-2">
              {description}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation(); // evita doble click bubbling
              handleClick();
            }}
            className="absolute bottom-2 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 text-white transition-transform duration-300 group-hover:translate-x-1"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
