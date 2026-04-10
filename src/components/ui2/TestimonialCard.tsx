import { Quote } from "lucide-react";

type TestimonialCardProps = {
  text: string;
  name: string;
  role?: string;
  image: string;
};

export default function TestimonialCard({
  text,
  name,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <article className="group relative w-full max-w-sm h-64 flex flex-col justify-between rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
      <div>
        <Quote className="w-10 h-10 text-lime-400 mb-4" />

        <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-4">
          {text}
        </p>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          {role && <span className="text-white/60 text-sm">{role}</span>}
        </div>
      </div>
    </article>
  );
}
