import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    <section className="relative px-6 py-24 md:px-12 lg:px-20 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00a9e0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />
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

        {/* Swiper Carousel */}
        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="!pb-14"
          >
            {ReasonsPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <article className="group relative w-full overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Imagen */}
                  <div className="relative h-80 md:h-96 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-lg border border-white/50">
                      <h3 className="text-xl md:text-2xl font-bold text-[#00a9e0]">
                        {post.title}
                      </h3>

                      <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom styles for Swiper pagination */}
          <style>{`
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background: #cbd5e1;
              opacity: 1;
              transition: all 0.3s;
            }

            .swiper-pagination-bullet-active {
              background: #00a9e0;
              width: 28px;
              border-radius: 5px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
