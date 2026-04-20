import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    title: "Llámanos",
    text: "Habla directamente con nuestro equipo y resuelve tus dudas al instante.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Escríbenos y recibe atención rápida desde tu celular, estés donde estés.",
  },
  {
    icon: Mail,
    title: "Correo",
    text: "Envíanos tu consulta y te responderemos en el menor tiempo posible.",
  },
  {
    icon: MapPin,
    title: "Oficina",
    text: "Visítanos y recibe asesoría personalizada de nuestro equipo.",
  },
];

export default function Contact() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00a9e0]">
            Habla con nosotros
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base md:text-lg">
            Estamos aquí para ayudarte. Elige el canal que prefieras y nuestro
            equipo te responderá rápidamente.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactOptions.map((item) => {
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
                    bg-cyan-100 text-[#00a9e0]
                    transition-all duration-300
                    group-hover:bg-[#00a9e0] group-hover:text-white group-hover:scale-110
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
