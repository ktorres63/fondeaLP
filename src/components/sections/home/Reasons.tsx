import CustomCarousel from "@/components/ui2/CustomCarrousel";

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
    <section className="relative px-6 py-24 md:px-12 lg:px-20 bg-gradient-to-b from-slate-50 via-white to-cyan-50/20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-40 w-[600px] h-[600px] bg-[#00a9e0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-[700px] h-[700px] bg-cyan-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c3f934]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#00a9e0] leading-tight">
            Todo comienza con un préstamo para:
          </h2>

          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Descubre cómo elegir el financiamiento adecuado según tus objetivos
            personales o profesionales.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-16">
          <CustomCarousel>
            {ReasonsPosts.map((post, index) => (
              <div key={index} className="flex justify-center px-4">
                {/* CARD */}
                <article className="group relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Imagen */}
                  <div className="relative h-80 md:h-105 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 backdrop-blur-md p-5 shadow-lg border border-white/50">
                      <h3 className="text-2xl font-bold text-[#00a9e0]">
                        {post.title}
                      </h3>

                      <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
    </section>
  );
}
