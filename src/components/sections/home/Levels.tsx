import bronze from "/Bronze.png";
import silver from "/Silver.png";
import gold from "/Gold.png";
import platinum from "/Master.png";

const Badges = [bronze, silver, gold, platinum];

const levels = [
  {
    name: "Socio",
    tag: "Nivel inicial",
    tagStyle: "bg-blue-50 text-blue-700",
    benefits: "Acceso básico a préstamos personales con condiciones estándar.",
    icon: Badges[0],
    border: "",
  },
  {
    name: "Silver",
    tag: "Nivel 2",
    tagStyle: "bg-slate-100 text-slate-600",
    benefits: "Montos mayores y mejores plazos para tus proyectos.",
    icon: Badges[1],
    border: "",
  },
  {
    name: "Gold",
    tag: "Nivel 3",
    tagStyle: "bg-amber-50 text-amber-700",
    benefits: "Prioridad en aprobación y beneficios exclusivos para ti.",
    icon: Badges[2],
    border: "",
  },
  {
    name: "Platinum",
    tag: "Nivel premium",
    tagStyle: "bg-green-50 text-green-700",
    benefits:
      "Máximos beneficios, atención preferencial y condiciones exclusivas.",
    icon: Badges[3],
    border: "border-[#A3E635] border-2",
  },
];

export default function Levels() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADER */}
        <h2 className="text-4xl md:text-6xl font-bold">
          Solicita más por cada nivel que subas
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
          Desbloquea mayores montos y mejores condiciones conforme avanzas con
          nosotros, de forma rápida y sin complicaciones
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition">
          Solicita tu préstamo
        </button>

        {/* GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map(({ name, tag, tagStyle, benefits, icon, border }) => (
            <div
              key={name}
              className={`
                p-8 bg-white rounded-2xl shadow-sm
                border border-slate-100 ${border}
                flex flex-col items-center text-center gap-3
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
              `}
            >
              <img src={icon} alt={name} className="w-24 h-24" />

              <h3 className="text-xl font-medium text-slate-900">{name}</h3>

              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${tagStyle}`}
              >
                {tag}
              </span>

              <p className="text-slate-500 text-sm leading-relaxed">
                {benefits}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
