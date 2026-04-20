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

        {/* Grid Layout: 1 grande izquierda + 2 pequeñas derecha */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card grande - izquierda (ocupa 2 filas en desktop) */}
          {blogPosts.slice(0, 1).map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl md:row-span-2 h-[400px] md:h-full min-h-[500px]"
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center w-fit px-6 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Leer artículo
                </Link>
              </div>
            </article>
          ))}

          {/* Cards pequeñas - derecha apiladas */}
          {blogPosts.slice(1, 3).map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl h-[400px] md:h-auto md:min-h-[238px]"
              style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center w-fit px-5 py-2.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 text-sm"
                >
                  Leer artículo
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/blog"
            className="px-8 py-4 rounded-xl bg-[#c3f934] text-black font-bold hover:bg-[#b3e824] hover:scale-105 transition-all duration-300 shadow-lg shadow-lime-400/30"
          >
            Ver más artículos
          </Link>
        </div>
      </div>
    </section>
  );
}
