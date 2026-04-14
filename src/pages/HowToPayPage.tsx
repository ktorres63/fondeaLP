import { Landmark, CreditCard, Smartphone } from "lucide-react";

const methods = [
  {
    icon: Landmark,
    title: "Pago en efectivo",
    description:
      "Realiza tu pago en agentes autorizados o puntos físicos a lo largo de todo el país. Cómodo, seguro y cerca de ti.",
    action: "Ver puntos cercanos →",
  },
  {
    icon: CreditCard,
    title: "Pago con tarjeta",
    description:
      "Usa tarjeta de débito o crédito para pagar de forma rápida y automática desde nuestra plataforma segura.",
    action: "Pagar ahora ⚡",
  },
  {
    icon: Smartphone,
    title: "Pago digital",
    description:
      "Transfiere desde apps bancarias o billeteras digitales en segundos utilizando tu cuenta CLABE única.",
    action: "Copiar CLABE ⧉",
  },
];

export default function HowToPayPage() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADER */}
        <h2 className="text-4xl md:text-6xl font-bold">
          ¿Cómo pagar tu préstamo?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
          Gestionar tus finanzas nunca fue tan sencillo. Elige el método que
          mejor se adapte a tu ritmo de vida.
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition">
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
                  transition-all duration-300
                  hover:-translate-y-3
                  hover:scale-105
                  hover:bg-white/20
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                "
              >
                {/* ICON */}
                <div
                  className="
                  w-14 h-14 flex items-center justify-center rounded-xl mb-6
                  bg-white/20 text-white
                  transition-all duration-300
                  group-hover:bg-lime-400 group-hover:text-black
                "
                >
                  <Icon size={26} />
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
                  mt-6 text-sm font-semibold text-lime-300
                  transition-all duration-300
                  group-hover:bg-white/20 group-hover:text-white group-hover:px-4 group-hover:py-2 group-hover:rounded-full
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
