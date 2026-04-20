import BlogCard from "@/components/ui2/BlogCard.tsx";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router";

export default function Blog() {
  return (
    <section className="relative px-6 py-24 md:py-28 md:px-16 lg:px-24 overflow-hidden">
      {/* Fondo gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00a9e0] via-[#0099d5] to-[#0088cc]" />

      {/* Decorative elements más elaborados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-white/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[900px] h-[900px] bg-gradient-to-tl from-blue-900/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
      </div>

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
            className="mt-12 px-8 py-4 rounded-xl bg-[#c3f934] text-black font-bold hover:bg-[#b3e824] hover:scale-105 transition-all duration-300 shadow-lg shadow-lime-400/30"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
}
