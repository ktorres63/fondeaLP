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
    <section className="py-20 bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Requisitos para solicitar tu préstamo
          </h2>

          <p className="mt-4 max-w-2xl mx-auto">
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
                  border border-slate-200
                  bg-white shadow-sm
                  transition-all duration-300
                  hover:-translate-y-3
                  hover:scale-105
                  hover:bg-slate-50
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-6
                    bg-sky-100 text-sky-600
                    transition-all duration-300
                    group-hover:bg-[#00A1CD] group-hover:text-white
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
