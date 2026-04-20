import { IdCard, Smartphone, Landmark, Mail } from "lucide-react";

const requirements = [
  {
    icon: IdCard,
    title: "DNI vigente",
    text: "Debes contar con un documento de identidad válido y actualizado para verificar tu información.",
  },
  {
    icon: Smartphone,
    title: "Número de celular propio",
    text: "Necesitas un número activo para recibir notificaciones y validar tu solicitud.",
  },
  {
    icon: Landmark,
    title: "Cuenta bancaria activa",
    text: "El desembolso de tu préstamo se realiza directamente a tu cuenta bancaria.",
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    text: "Necesitas un email válido para recibir información sobre tu solicitud y notificaciones importantes.",
  },
];

export default function Requirements() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#00a9e0] via-[#0099d5] to-[#0088cc] text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-300/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Requisitos para solicitar tu préstamo
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Solo necesitas cumplir con estos requisitos básicos para acceder a
            tu préstamo de forma rápida y segura.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="
                  group relative p-8 rounded-3xl text-center
                  border border-white/20
                  bg-white/90 backdrop-blur
                  shadow-lg
                  transition-all duration-300
                  hover:-translate-y-3
                  hover:scale-105
                  hover:bg-white
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-6
                    bg-cyan-100 text-[#00a9e0]
                    transition-all duration-300
                    group-hover:bg-[#c3f934] group-hover:text-black group-hover:scale-110
                  "
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
