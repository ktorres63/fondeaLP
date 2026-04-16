import BlogCard from "@/components/ui2/BlogCard.tsx";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router";

export default function Blog() {
  return (
    <section className="relative px-6 py-28 md:px-16 lg:px-24 overflow-hidden">
      {/* Fondo gradiente */}
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/90 via-sky-500/90 to-blue-600/90" />

      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-100 h-100 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-100 h-100 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto">
            Consejos para tus finanzas
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
            Información clara para ayudarte a tomar mejores decisiones
            financieras.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-14 bg-white/10" />

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl overflow-hidden
              bg-white/5 border border-white/10 backdrop-blur-md
              transition-all duration-300
              hover:bg-white/10 hover:border-sky-400/40
              hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-transparent via-sky-400 to-transparent" />

              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/blog"
            className="mt-12 px-8 py-4 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition"
          >
            Ver todos los articulos
          </Link>
        </div>
      </div>
    </section>
  );
}
