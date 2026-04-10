import BlogCard from "@/components/ui2/BlogCard.tsx";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Todo comienza con un préstamo para:
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Información clara para ayudarte a tomar mejores decisiones
            financieras.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
