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
    <section className="py-20 bg-white">
      <div className="px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mt-2 leading-tight">
            Beneficios de nuestros préstamos
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            Diseñamos una experiencia simple, rápida y transparente para que
            obtengas el financiamiento que necesitas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
