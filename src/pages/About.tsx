import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-14 md:px-16 lg:px-24 bg-slate-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Nosotros
        </h1>
      </section>

      {/* Historia */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Nuestra historia
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Fondea nació con una idea simple: hacer que el acceso al crédito sea
            más transparente, rápido y humano. Durante años, vimos cómo muchas
            personas enfrentaban procesos complicados, poca claridad en las
            condiciones y experiencias frustrantes al solicitar un préstamo.
          </p>

          <p className="text-slate-600 mt-4 leading-relaxed">
            Hoy trabajamos para cambiar eso. Construimos soluciones digitales
            que simplifican cada paso, brindando confianza, claridad y control
            total sobre tus finanzas.
          </p>

          <p className="mt-8 text-lg font-semibold text-slate-800">
            Creemos en un sistema financiero más justo, accesible y centrado en
            las personas.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-10">
            Nuestros valores
          </h2>

          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Estos principios guían cada decisión que tomamos y definen cómo
            construimos nuestros productos y relaciones con los clientes.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Transparencia en cada operación",
              "Velocidad sin sacrificar seguridad",
              "Experiencia simple y clara",
              "Compromiso con el cliente",
              "Innovación constante",
              "Acceso financiero inclusivo",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-[#00A1CD] mt-1" size={20} />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-10">
            ¿Qué ofrecemos?
          </h2>

          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
            Soluciones financieras diseñadas para adaptarse a tu realidad,
            brindándote control, rapidez y confianza en cada paso.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <div className="w-full h-64 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center">
              <span className="text-slate-400">Imagen aquí</span>
            </div>

            {/* Contenido */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Las ventajas de Fondea
              </h3>

              <ul className="flex flex-col gap-3">
                {[
                  "Proceso 100% digital",
                  "Aprobación rápida",
                  "Condiciones claras y sin sorpresas",
                  "Flexibilidad en pagos",
                  "Atención personalizada",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#00A1CD] mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className="px-8 py-4 rounded-full bg-[#00A1CD] text-white font-semibold hover:scale-105 transition">
                  Solicita tu préstamo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Misión */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Misión</h3>
            <p className="text-slate-600 leading-relaxed">
              Brindar acceso a soluciones financieras simples, rápidas y
              transparentes, ayudando a las personas a tomar mejores decisiones
              y mejorar su bienestar económico.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Visión</h3>
            <p className="text-slate-600 leading-relaxed">
              Convertirnos en la plataforma líder de servicios financieros
              digitales en la región, reconocida por su innovación, confianza y
              enfoque centrado en el usuario.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
