import { Link } from "react-router";
import CustomCarousel from "@/components/ui2/CustomCarrousel";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  BadgeDollarSign,
  Clock,
  Star,
} from "lucide-react";

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
    subtitle:
      "Sin letras pequeñas. Condiciones claras y transparentes desde el primer momento.",
  },
  {
    icon: BadgeDollarSign,
    title: "Sin costos ocultos",
    tag: "Total transparencia",
    subtitle:
      "Pagas exactamente lo que acordamos, nada más. Conoce tu cuota exacta antes de firmar.",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    tag: "Siempre contigo",
    subtitle:
      "Gestiona tu crédito cuando quieras, desde donde estés. Soporte humano disponible todo el día.",
  },
  {
    icon: Star,
    title: "Miles de socios",
    tag: "Comunidad activa",
    subtitle:
      "Una comunidad que crece contigo y respalda tu futuro. Más de 12,000 familias ya confían en nosotros.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 md:py-32 px-6 bg-sky-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 leading-tight">
            Tu crédito,{" "}
            <span className="text-[#00A1CD]">sin complicaciones</span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-md">
            Te acompañamos con procesos claros y opciones pensadas para ti. Sin
            letras pequeñas, sin sorpresas.
          </p>

          <Link
            to="/solicitar"
            className="inline-flex items-center gap-2 bg-[#A3E635] hover:bg-lime-400 text-lime-900 font-semibold px-6 py-3 rounded-2xl transition-all hover:scale-105 w-fit text-sm"
          >
            Solicita tu préstamo
          </Link>
        </div>

        {/* RIGHT — Custom Carousel */}
        <div className="flex justify-center items-center min-h-125">
          <CustomCarousel>
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group bg-white rounded-2xl border border-slate-200 p-10 md:p-12 flex flex-col gap-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-sky-100">
                    <Icon className="w-7 h-7 text-[#00A1CD] group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title + tag */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {reason.title}
                    </h3>
                    <span className="text-sm font-medium px-4 py-1.5 bg-green-50 text-green-700 rounded-full w-fit">
                      {reason.tag}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-slate-500 text-base leading-relaxed">
                    {" "}
                    {reason.subtitle}
                  </p>
                </div>
              );
            })}
          </CustomCarousel>
        </div>
      </div>
    </section>
  );
}
