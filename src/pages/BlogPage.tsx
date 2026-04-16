import BlogCard from "@/components/ui2/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto  text-slate-900">
            Consejos para tus finanzas
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600  text-lg">
            Información clara para ayudarte a tomar mejores decisiones
            financieras.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px my-14 bg-gray-200" />

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl overflow-hidden
              bg-white/5 border border-gray-200 backdrop-blur-md
              transition-all duration-300
              hover:bg-gray-50 hover:border-sky-400/40
              hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-transparent via-sky-400 to-transparent" />

              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
