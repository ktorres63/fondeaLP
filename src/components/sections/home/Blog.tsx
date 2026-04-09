import BlogCard from "@/components/ui2/BlogCard.tsx";

const blogPosts = [
  {
    title: "Cómo elegir el préstamo adecuado según tus necesidades",
    description:
      "Conoce qué factores considerar antes de solicitar un préstamo y elige la opción que mejor se adapte a tus objetivos.",
    image: "/images/blog/loan-advice.jpg",
    category: "Educación Financiera",
  },
  {
    title: "Consejos para mantener tus pagos al día",
    description:
      "Aprende estrategias simples para organizar tus cuotas y evitar retrasos.",
    image: "/images/blog/payment-tips.jpg",
    category: "Finanzas Personales",
  },
  {
    title: "Errores comunes al solicitar financiamiento",
    description:
      "Evita decisiones apresuradas y conoce qué revisar antes de pedir crédito.",
    image: "/images/blog/loan-errors.jpg",
    category: "Recomendaciones",
  },
];

export default function Blog() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-sky-600">
            Blog Financiero
          </p>

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
