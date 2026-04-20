import CustomCarousel from "@/components/ui2/CustomCarrousel";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  BadgeDollarSign,
  Clock,
  Star,
} from "lucide-react";
import { useScrollToCalculator } from "@/hooks/useScrollToCalculator";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% seguro",
    tag: "Encriptación bancaria",
    subtitle:
      "Tus datos y dinero protegidos con encriptación de nivel bancario. Tu privacidad es nuestra prioridad.",
  },
  {
    icon: Zap,
    title: "Aprobación rápida",
    tag: "En minutos",
    subtitle:
      "Respuesta en minutos, sin papeleo ni filas interminables. Todo desde tu teléfono o computadora.",
  },
  {
    icon: HeartHandshake,
    title: "Trato justo",
    tag: "Sin letras pequeñas",
    subtitle: "Condiciones claras y transparentes desde el primer momento.",
  },
  {
    icon: BadgeDollarSign,
    title: "Sin costos ocultos",
    tag: "Total transparencia",
    subtitle:
      "Pagas exactamente lo que acordamos. Conoce tu cuota antes de confirmar.",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    tag: "Siempre contigo",
    subtitle: "Gestiona tu crédito cuando quieras, desde donde estés.",
  },
  {
    icon: Star,
    title: "Miles de socios",
    tag: "Comunidad activa",
    subtitle: "Más de 12,000 familias ya confían en nosotros.",
  },
];

export default function WhyChooseUs() {
  const scrollToCalculator = useScrollToCalculator();
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00a9e0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Tu crédito,{" "}
            <span className="text-[#00a9e0]">sin complicaciones</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Te acompañamos con procesos claros y opciones pensadas para ti. Sin
            letras pequeñas, sin sorpresas.
          </p>
          <button
            onClick={scrollToCalculator}
            className="mx-auto md:mx-0 inline-flex items-center justify-center gap-2 bg-[#c3f934] hover:bg-[#b3e824] text-black font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 w-fit shadow-lg shadow-lime-400/30"
          >
            Solicita tu préstamo
          </button>
        </div>

        {/* RIGHT — contiene el carousel con overflow controlado */}
        <div className="w-full min-w-0">
          <CustomCarousel>
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="flex justify-center px-2 sm:px-4"
                >
                  <div className="group w-full max-w-sm sm:max-w-md md:max-w-lg min-h-65 sm:min-h-70 md:min-h-80  bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-cyan-100 group-hover:bg-[#00a9e0] shrink-0 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00a9e0] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    {/* Title + tag */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
                        {reason.title}
                      </h3>
                      <span className="text-xs sm:text-sm font-medium px-3 py-1 bg-green-50 text-green-700 rounded-full w-fit">
                        {reason.tag}
                      </span>
                    </div>
                    {/* Subtitle */}
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                      {reason.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </CustomCarousel>
        </div>
      </div>
    </section>
  );
}
