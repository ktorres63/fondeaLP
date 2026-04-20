import { BadgeCheck, FileText, Wallet, ShieldCheck } from "lucide-react";
import BenefitCard from "../../ui2/BenefitCard";

const benefits = [
  {
    title: "Aprovacion Inmediata",
    image: "/aprovacionInmediata.webp",
    description: "Paga, compra y recarga desde la app",
    linkText: "PSE, facturas y recargas",
    icon: BadgeCheck,
  },
  {
    title: "Sin papeleo complicado",
    image: "/sinPapeleoComplicado.webp",
    description: "Elige cómo y cuándo pagar",
    linkText: "Cuotas a tu medida",
    icon: FileText,
  },
  {
    title: "Pagos Flexibles",
    image: "/pagosFlexibles.webp",
    description: "Obtén tu préstamo en minutos",
    linkText: "Sin trámites largos",
    icon: Wallet,
  },
  // {
  //   title: "Tasas Transparentes",
  //   image: "/tasasTransparentes.png",
  //   description: "Sin costos ocultos ni sorpresas",
  //   linkText: "Información clara",
  //   icon: CircleDollarSign,
  // },
  {
    title: "100% Seguro",
    image: "/seguro.webp",
    description: "Protegemos tus datos y tu dinero",
    linkText: "Seguridad garantizada",
    icon: ShieldCheck,
  },
];
export default function BenefitsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00a9e0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[#00a9e0] font-bold text-sm md:text-base uppercase tracking-wide mb-2">Nuestros Beneficios</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Beneficios de nuestros <span className="text-[#00a9e0]">préstamos</span>
          </h2>
          <p className="mt-3 md:mt-4 text-slate-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
            Diseñamos una experiencia simple, rápida y transparente para que
            obtengas el financiamiento que necesitas.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 justify-items-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="w-full max-w-xs">
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
