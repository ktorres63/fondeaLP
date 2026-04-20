import { CheckCircle, RefreshCw, TrendingUp, Clock } from "lucide-react";
import { useScrollToCalculator } from "@/hooks/useScrollToCalculator";

export default function RenewLoanPage() {
  const scrollToCalculator = useScrollToCalculator();
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#00a9e0] via-[#0099d5] to-[#0088cc] text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
            <RefreshCw className="w-5 h-5" />
            <span className="font-semibold">Proceso 100% digital</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            Renueva tu préstamo personal
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Puedes renovar tu préstamo online de forma simple y con importantes beneficios
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-[#00a9e0]">¿Cuáles son los beneficios</span>{" "}
            <span className="text-slate-900">de renovar tu préstamo?</span>
          </h2>

          <p className="text-center text-slate-600 text-lg max-w-3xl mx-auto mb-14">
            Obtén mejores condiciones y continúa construyendo tu historial crediticio
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="w-full h-80 rounded-2xl border border-slate-200 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
              <img
                src="/renew.jpg"
                alt="Renueva tu prestamos"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                Al renovar tu préstamo con nosotros obtendrás beneficios
                exclusivos que te ayudarán a mantener el control de tus finanzas
                y mejorar tu liquidez.
              </p>

              <div className="space-y-4">
                {[
                  { icon: TrendingUp, text: "Mejores tasas según tu historial" },
                  { icon: Clock, text: "Flexibilidad en plazos de pago" },
                  { icon: RefreshCw, text: "Acceso rápido y sin trámites complicados" },
                  { icon: CheckCircle, text: "Posibilidad de obtener dinero adicional" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all">
                      <div className="w-10 h-10 bg-[#00a9e0] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <span className="text-slate-700 font-medium pt-2">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <button
                  onClick={scrollToCalculator}
                  className="px-8 py-4 rounded-xl font-bold text-white bg-[#00a9e0] hover:bg-[#0099d5] hover:scale-105 transition-all shadow-lg"
                >
                  Renovar mi préstamo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section (confianza) */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-slate-900">Proceso</span>{" "}
            <span className="text-[#00a9e0]">rápido, seguro y 100% online</span>
          </h3>

          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Renueva tu préstamo en minutos sin papeleo innecesario. Nuestro
            proceso está diseñado para ser simple, transparente y adaptado a ti.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button
              onClick={scrollToCalculator}
              className="px-8 py-4 rounded-xl font-bold bg-[#c3f934] text-slate-900 hover:bg-[#b3e824] hover:scale-105 transition-all shadow-lg"
            >
              Empezar ahora
            </button>
            <button className="px-8 py-4 rounded-xl font-bold border-2 border-[#00a9e0] text-[#00a9e0] hover:bg-[#00a9e0] hover:text-white transition-all">
              Más información
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
