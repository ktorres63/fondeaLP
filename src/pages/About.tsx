import { CheckCircle, Target, Eye, Users } from "lucide-react";
import { useScrollToCalculator } from "@/hooks/useScrollToCalculator";
import SEO from "@/components/SEO";

export default function About() {
  const scrollToCalculator = useScrollToCalculator();
  return (
    <>
      <SEO
        title="Nosotros - FONDEA | Préstamos Personales en Perú"
        description="Conoce FONDEA, la plataforma líder en préstamos personales digitales en Perú. Misión, visión, valores y nuestro compromiso con la transparencia y accesibilidad financiera."
        keywords="fondea nosotros, quienes somos, misión fondea, visión fondea, préstamos digitales perú"
      />
      <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#00a9e0] via-[#0099d5] to-[#0088cc] text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Transformando el acceso al crédito en Perú
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-[#00a9e0]">Nuestra</span> <span className="text-slate-900">historia</span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Fondea nació con una idea simple: hacer que el acceso al crédito sea
            más transparente, rápido y humano. Durante años, vimos cómo muchas
            personas enfrentaban procesos complicados, poca claridad en las
            condiciones y experiencias frustrantes al solicitar un préstamo.
          </p>

          <p className="text-slate-600 text-lg mt-6 leading-relaxed">
            Hoy trabajamos para cambiar eso. Construimos soluciones digitales
            que simplifican cada paso, brindando confianza, claridad y control
            total sobre tus finanzas.
          </p>

          <div className="mt-10 inline-block px-8 py-4 bg-gradient-to-r from-[#00a9e0] to-[#0099d5] text-white rounded-xl">
            <p className="text-lg font-semibold">
              Creemos en un sistema financiero más justo, accesible y centrado en las personas
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-[#00a9e0]">Nuestros</span> <span className="text-slate-900">valores</span>
          </h2>

          <p className="text-slate-600 text-lg text-center max-w-2xl mx-auto mb-12">
            Estos principios guían cada decisión que tomamos y definen cómo
            construimos nuestros productos y relaciones con los clientes.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Transparencia en cada operación",
              "Velocidad sin sacrificar seguridad",
              "Experiencia simple y clara",
              "Compromiso con el cliente",
              "Innovación constante",
              "Acceso financiero inclusivo",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-[#00a9e0] hover:shadow-md transition-all">
                <CheckCircle className="text-[#00a9e0] mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
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
                <button
                  onClick={scrollToCalculator}
                  className="px-8 py-4 rounded-xl bg-[#00a9e0] text-white font-bold hover:bg-[#0099d5] hover:scale-105 transition-all shadow-lg"
                >
                  Solicita tu préstamo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#00a9e0] to-[#0088cc] text-white overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misión</h3>
              <p className="text-white/90 leading-relaxed">
                Brindar acceso a soluciones financieras simples, rápidas y
                transparentes, ayudando a las personas a tomar mejores decisiones
                y mejorar su bienestar económico.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#c3f934] to-[#a3d624] text-slate-900 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/30 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 bg-slate-900/10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visión</h3>
              <p className="text-slate-800 leading-relaxed">
                Convertirnos en la plataforma líder de servicios financieros
                digitales en la región, reconocida por su innovación, confianza y
                enfoque centrado en el usuario.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
