import {
  BadgeCheck,
  FileText,
  Wallet,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Aprobación inmediata",
  },
  {
    icon: FileText,
    title: "Sin papeleo complicado",
  },
  {
    icon: Wallet,
    title: "Pagos flexibles",
  },
  {
    icon: CircleDollarSign,
    title: "Tasas transparentes",
  },
  {
    icon: ShieldCheck,
    title: "100% seguro",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Beneficios de nuestros préstamos
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Diseñamos una experiencia simple, rápida y transparente para que
            obtengas el financiamiento que necesitas.
          </p>
        </div>

        {/* Beneficios */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-200 hover:shadow-md transition"
              >
                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-sky-600" />
                </div>

                <h3 className="font-semibold text-slate-800 text-sm md:text-base">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
