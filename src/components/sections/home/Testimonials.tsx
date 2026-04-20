import TestimonialCard from "@/components/ui2/TestimonialCard.tsx";

const testimonials = [
  {
    text: "Gracias al préstamo pude invertir en mi negocio y crecer más rápido de lo que imaginé.",
    name: "Carlos Mendoza",
    role: "Emprendedor",
    image: "/user1.jpeg",
  },
  {
    text: "El proceso fue rápido, transparente y sin complicaciones. Muy recomendado.",
    name: "María Torres",
    role: "Cliente",
    image: "/user2.jpg",
  },
  {
    text: "Ahora manejo mejor mis pagos y tengo acceso a mejores oportunidades financieras.",
    name: "Luis Ramírez",
    role: "Freelancer",
    image: "/user3.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-24 px-6 overflow-hidden bg-gradient-to-r from-[#00a9e0] via-[#0099d5] to-[#0088cc]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-14">
          Testimonios
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
