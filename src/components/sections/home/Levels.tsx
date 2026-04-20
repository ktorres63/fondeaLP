import bronze from "/Bronze.png";
import silver from "/Silver.png";
import gold from "/Gold.png";
import platinum from "/Master.png";
import { Check, TrendingUp, ArrowRight } from "lucide-react";

const Badges = [bronze, silver, gold, platinum];

const levels = [
  {
    name: "Socio",
    tag: "Nivel inicial",
    tagStyle: "bg-blue-50 text-blue-700",
    icon: Badges[0],
    border: "",
    points: "0 puntos",
    maxAmount: "S/ 1,500",
    benefits: [
      "Préstamos desde S/500",
      "Aprobación en 24 horas",
      "Sin historial crediticio"
    ],
    requirements: [
      "DNI vigente",
      "Ser mayor de 18 años",
      "Número celular activo"
    ]
  },
  {
    name: "Silver",
    tag: "Nivel 2",
    tagStyle: "bg-slate-100 text-slate-600",
    icon: Badges[1],
    border: "",
    points: "400 puntos",
    maxAmount: "S/ 5,000",
    benefits: [
      "Montos hasta S/5,000",
      "Tasas preferenciales",
      "Plazos hasta 12 meses"
    ],
    requirements: [
      "2 préstamos pagados a tiempo",
      "Historial positivo",
      "Cuenta bancaria activa"
    ]
  },
  {
    name: "Gold",
    tag: "Nivel 3",
    tagStyle: "bg-amber-50 text-amber-700",
    icon: Badges[2],
    border: "",
    points: "1,100 puntos",
    maxAmount: "S/ 12,000",
    benefits: [
      "Hasta S/12,000 disponibles",
      "Aprobación inmediata",
      "Asesor personal dedicado"
    ],
    requirements: [
      "5+ préstamos completados",
      "Excelente historial",
      "Ingresos comprobables"
    ]
  },
  {
    name: "Platinum",
    tag: "Nivel premium",
    tagStyle: "bg-green-50 text-green-700",
    icon: Badges[3],
    border: "",
    points: "2,200 puntos",
    maxAmount: "S/ 25,000",
    benefits: [
      "Hasta S/25,000 o más",
      "Tasas VIP exclusivas",
      "Atención prioritaria 24/7"
    ],
    requirements: [
      "10+ préstamos exitosos",
      "Historial impecable",
      "Antigüedad mínima 1 año"
    ]
  },
];

export default function Levels() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#00a9e0] via-[#0099d5] to-[#0088cc] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-tl from-blue-900/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#c3f934]/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Tu camino hacia{" "}
            <span className="text-[#c3f934]">mayores beneficios</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-white/90 text-lg">
            Con cada préstamo que pagas a tiempo, acumulas puntos y desbloqueas
            nuevos niveles con montos más altos y mejores condiciones.
          </p>

          <button className="mt-8 px-8 py-3.5 rounded-xl bg-[#c3f934] text-black font-bold hover:bg-[#b3e824] hover:scale-105 transition-all duration-300 shadow-lg shadow-lime-400/30">
            Comienza tu primer préstamo
          </button>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((level, index) => (
            <div key={level.name} className="flex">
              <div
                className="
                  group relative p-6 bg-white rounded-2xl w-full
                  border-2 border-slate-200
                  flex flex-col text-left
                  transition-all duration-300
                  hover:-translate-y-3 hover:shadow-2xl
                "
              >
                {/* Level indicator badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full text-xs font-bold text-white shadow-lg">
                  NIVEL {index + 1}
                </div>

              {/* Icon */}
              <div className="flex justify-center mb-4 mt-4">
                <img
                  src={level.icon}
                  alt={level.name}
                  className="w-20 h-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{level.name}</h3>

              {/* Points to unlock */}
              <div className="flex items-center justify-center gap-2 mb-5 px-3 py-2 bg-gradient-to-r from-[#00a9e0]/10 to-cyan-50 rounded-lg">
                <TrendingUp size={16} className="shrink-0 text-[#00a9e0]" />
                <span className="text-sm font-bold text-[#00a9e0]">
                  {index === 0 ? "Comienza aquí" : `Desbloquea con ${level.points}`}
                </span>
              </div>

              {/* Max Amount - DESTACADO */}
              <div className="mb-6 p-4 bg-gradient-to-br from-[#00a9e0]/10 to-cyan-50 rounded-xl border-2 border-[#00a9e0]/20">
                <p className="text-xs text-slate-600 font-medium mb-1">Solicita hasta</p>
                <p className="text-2xl font-black text-[#00a9e0]">{level.maxAmount}</p>
              </div>

              {/* Benefits */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">
                  ✓ Beneficios
                </h4>
                <ul className="space-y-2">
                  {level.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check size={14} className="shrink-0 mt-0.5 text-green-600" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
