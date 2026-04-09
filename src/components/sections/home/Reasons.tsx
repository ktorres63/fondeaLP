import SimpleCard from "@/components/ui2/SimpleCard";

const ReasonsPosts = [
  {
    title: "Mejorar tu hogar",
    description:
      "Renueva tus espacios o realiza mejoras importantes con cuotas accesibles.",
    image: "/home-improvement.jpg",
  },
  {
    title: "Impulsar tu negocio",
    description:
      "Obtén capital para crecer, invertir o cubrir nuevas oportunidades.",
    image: "/business-growth.webp",
  },
  {
    title: "Cumplir tus metas",
    description:
      "Haz realidad proyectos personales con financiamiento flexible.",
    image: "/personal-goals.jpg",
  },
];

export default function Reasons() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Todo comienza con un préstamo para:
          </h2>

          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Descubre cómo elegir el financiamiento adecuado según tus objetivos
            personales o profesionales.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ReasonsPosts.map((post, index) => (
            <SimpleCard
              key={index}
              title={post.title}
              description={post.description}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
