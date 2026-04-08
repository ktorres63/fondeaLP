import { IdCard, Smartphone, Landmark } from "lucide-react";

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
];

export default function Requirements() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Requisitos para solicitar tu préstamo
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Solo necesitas cumplir con estos requisitos básicos para acceder a
            tu préstamo de forma rápida y segura.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {requirements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center hover:shadow-md transition"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-sky-100 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-sky-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
