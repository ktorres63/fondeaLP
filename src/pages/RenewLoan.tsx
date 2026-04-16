import { CheckCircle } from "lucide-react";

export default function RenewLoanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-slate-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-3xl mx-auto">
          Renueva tu préstamo personal
        </h1>

        <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
          Puedes renovar tu préstamo online de forma simple y con importantes
          beneficios.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-14">
            ¿Cuáles son los beneficios de renovar tu préstamo personal?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="w-full h-64 rounded-2xl border border-slate-200 flex items-center justify-center bg-slate-50">
              <img
                src="/renew.jpg"
                alt="Renueva tu prestamos"
                className="w-full max-w-md rounded-2xl shadow-lg"
              />{" "}
            </div>

            {/* Content */}
            <div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Al renovar tu préstamo con nosotros obtendrás beneficios
                exclusivos que te ayudarán a mantener el control de tus finanzas
                y mejorar tu liquidez.
              </p>

              <ul className="flex flex-col gap-4">
                {[
                  "Mejores tasas según tu historial",
                  "Flexibilidad en plazos de pago",
                  "Acceso rápido y sin trámites complicados",
                  "Posibilidad de obtener dinero adicional",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#00A1CD] mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-10">
                <button className="px-8 py-4 rounded-full font-semibold text-white bg-[#00A1CD] hover:scale-105 transition shadow-lg">
                  Renovar mi préstamo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section (confianza) */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Proceso rápido, seguro y 100% online
          </h3>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Renueva tu préstamo en minutos sin papeleo innecesario. Nuestro
            proceso está diseñado para ser simple, transparente y adaptado a ti.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="px-8 py-4 rounded-full font-semibold bg-[#A3E635] text-slate-900 hover:scale-105 transition">
              Empezar ahora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
