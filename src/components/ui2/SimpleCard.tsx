type BlogCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function BlogCard({ title, description, image }: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white shadow-lg w-full max-w-xl md:max-w-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {" "}
      {/* Imagen */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay inferior */}
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/60 backdrop-blur-md p-4 shadow-md">
          <h3 className="text-xl font-semibold text-sky-900">{title}</h3>
          <p className="mt-2 text-sm text-sky-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
