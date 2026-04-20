import BlogCard from "@/components/ui2/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { BookOpen } from "lucide-react";
import SEO from "@/components/SEO";

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog FONDEA - Consejos Financieros y Préstamos en Perú"
        description="Aprende sobre finanzas personales, créditos, préstamos y educación financiera. Tips y consejos para mejorar tu salud financiera en Perú."
        keywords="blog finanzas, educación financiera perú, consejos préstamos, finanzas personales"
      />
      <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#00a9e0] via-[#0099d5] to-[#0088cc] text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Blog FONDEA</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Consejos para tus finanzas
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Información clara para ayudarte a tomar mejores decisiones financieras
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group relative flex flex-col rounded-2xl overflow-hidden
                bg-white border border-slate-200
                transition-all duration-300
                hover:border-[#00a9e0] hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#00a9e0] via-[#0099d5] to-[#00a9e0]" />

                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
