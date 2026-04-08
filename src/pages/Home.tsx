import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/sections/home/HeroSection";
import Levels from "@/components/sections/home/Levels";
import BenefitsSection from "@/components/sections/home/Benefits";
import FinalCTA from "@/components/sections/home/FinalCTA";
import LoansPeru from "@/components/sections/home/LoansPeru";
import { ChevronDown, Zap, Shield, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const faqs = [
  {
    id: 1,
    question: "¿Cuánto puedo solicitar?",
    answer:
      "Puedes solicitar desde S/ 500 hasta S/ 10,000 dependiendo de tu perfil crediticio y capacidad de pago.",
  },
  {
    id: 2,
    question: "¿Cuánto tiempo tarda el desembolso?",
    answer:
      "Una vez aprobada tu solicitud, el dinero llega a tu cuenta en menos de 24 horas hábiles.",
  },
  {
    id: 3,
    question: "¿Qué requisitos necesito?",
    answer:
      "Solo necesitas tu DNI vigente, ser mayor de 18 años y tener una cuenta bancaria en Perú. Sin trámites complicados.",
  },
  {
    id: 4,
    question: "¿Es seguro solicitar un préstamo aquí?",
    answer:
      "Sí. Estamos regulados por la SBS y usamos encriptación de datos de nivel bancario para proteger tu información.",
  },
];

const benefits = [
  {
    icon: <Zap size={28} />,
    title: "Aprobación rápida",
    description:
      "Respuesta en minutos, dinero en tu cuenta en menos de 24 horas.",
  },
  {
    icon: <Shield size={28} />,
    title: "100% seguro",
    description: "Regulados por la SBS. Tu información siempre protegida.",
  },
  {
    icon: <Clock size={28} />,
    title: "Sin filas ni papeleos",
    description: "Todo desde tu celular o computadora, cuando quieras.",
  },
];

// ─── FAQ Item ────────────────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-xl overflow-hidden transition-all"
      style={{ borderColor: open ? "#0EA5E9" : "" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          className="transition-transform shrink-0 ml-4"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: "#0EA5E9",
          }}
        />
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

// ─── Home ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <BenefitsSection />

      {/* ── Beneficios ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div
                  className="p-4 rounded-xl mb-4"
                  style={{ backgroundColor: "#0EA5E9", color: "white" }}
                >
                  {b.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Levels />
      <LoansPeru />

      {/* ── FAQ Preview ── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#f0f9ff" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Resolvemos tus dudas más comunes
          </p>

          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              style={{ borderColor: "#0EA5E9", color: "#0EA5E9" }}
              className="hover:bg-sky-50 font-semibold gap-2"
            >
              <Link to="/preguntas-frecuentes">
                Ver todas las preguntas <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
