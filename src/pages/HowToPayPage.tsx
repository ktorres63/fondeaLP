import { Landmark, CreditCard, Smartphone, Sparkles } from "lucide-react";
import { useScrollToCalculator } from "@/hooks/useScrollToCalculator";

const methods = [
  {
    icon: Landmark,
    title: "Pago en efectivo",
    description:
      "Realiza tu pago en agentes autorizados o puntos físicos a lo largo de todo el país. Cómodo, seguro y cerca de ti.",
    action: "Ver puntos cercanos →",
    gradient: "from-blue-400 to-cyan-300",
  },
  {
    icon: CreditCard,
    title: "Pago con tarjeta",
    description:
      "Usa tarjeta de débito o crédito para pagar de forma rápida y automática desde nuestra plataforma segura.",
    action: "Pagar ahora ⚡",
    gradient: "from-purple-400 to-pink-300",
  },
  {
    icon: Smartphone,
    title: "Pago digital",
    description:
      "Transfiere desde apps bancarias o billeteras digitales en segundos utilizando tu cuenta CLABE única.",
    action: "Copiar CLABE ⧉",
    gradient: "from-lime-400 to-green-300",
  },
];

export default function HowToPayPage() {
  const scrollToCalculator = useScrollToCalculator();

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#00a9e0] via-[#0099d5] to-[#0088cc] text-white overflow-hidden">
      {/* CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-tl from-blue-900/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300/10 rounded-full blur-3xl" />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern-white opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* HEADER */}
        <h2 className="text-4xl md:text-6xl font-bold">
          ¿Cómo pagar tu préstamo?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
          Gestionar tus finanzas nunca fue tan sencillo. Elige el método que
          mejor se adapte a tu ritmo de vida.
        </p>

        <button
          onClick={scrollToCalculator}
          className="mt-8 px-8 py-3.5 rounded-xl bg-[#c3f934] text-black font-bold hover:bg-[#b3e824] hover:scale-105 transition-all duration-300 shadow-lg shadow-lime-400/30"
        >
          Solicita tu préstamo
        </button>

        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {methods.map((method, index) => {
            const Icon = method.icon;

            return (
              <div
                key={index}
                className="
                  group relative p-8 rounded-3xl text-left
                  backdrop-blur-md border border-white/10
                  bg-white/10 shadow-lg
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:scale-105
                  hover:bg-white/20
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                  animate-[fadeIn_0.6s_ease-out]
                "
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* ICON CONTAINER WITH ANIMATED GLOW */}
                <div className="relative mb-6">
                  {/* Animated glow ring */}
                  <div
                    className={`
                    absolute inset-0 w-16 h-16 rounded-2xl blur-xl opacity-0
                    bg-gradient-to-br ${method.gradient}
                    transition-all duration-500
                    group-hover:opacity-100 group-hover:scale-125
                    animate-[pulse_2s_ease-in-out_infinite]
                  `}
                  />

                  {/* Icon background */}
                  <div
                    className={`
                    relative w-16 h-16 flex items-center justify-center rounded-2xl
                    bg-gradient-to-br ${method.gradient}
                    text-white shadow-lg
                    transition-all duration-500
                    group-hover:rotate-12 group-hover:scale-110
                    animate-[float_3s_ease-in-out_infinite]
                  `}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Icon size={30} strokeWidth={2.5} />

                    {/* Sparkle effect on hover */}
                    <Sparkles
                      className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size={16}
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold">{method.title}</h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-white/80 text-sm leading-relaxed">
                  {method.description}
                </p>

                {/* ACTION */}
                <button
                  className="
                  mt-6 text-sm font-bold text-[#c3f934]
                  transition-all duration-300
                  group-hover:bg-[#c3f934] group-hover:text-black group-hover:px-4 group-hover:py-2 group-hover:rounded-full
                "
                >
                  {method.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
