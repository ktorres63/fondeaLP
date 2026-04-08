import CustomCarousel from "@/components/ui2/CustomCarrousel";

const levels = [
  {
    name: "Socio",
    benefits: "Acceso básico a préstamos personales.",
  },
  {
    name: "Silver",
    benefits: "Montos mayores y mejores plazos.",
  },
  {
    name: "Gold",
    benefits: "Prioridad en aprobación y beneficios exclusivos.",
  },
  {
    name: "Platinum",
    benefits: "Máximos beneficios y atención preferencial.",
  },
];
export default function Levels() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-12">
        <div className="relative">
          {" "}
          {/* ← agregar esto */}
          <CustomCarousel>
            {levels.map((level) => (
              <div className="p-8 bg-white rounded-2xl shadow">
                <h3>{level.name}</h3>
                <p className="mt-3 text-slate-600">{level.benefits}</p>
              </div>
            ))}
          </CustomCarousel>
        </div>
      </div>
    </section>
  );
}
