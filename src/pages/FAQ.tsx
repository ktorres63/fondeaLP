import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Questions } from "@/data/FAQs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="relative py-24 md:py-16 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Decorative blobs (ajustados para fondo claro) */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-sky-100 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-100 blur-3xl pointer-events-none" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(circle,#0ea5e9_1px,transparent_1px)] bg-size-[28px_28px]" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight font-serif">
            Resolvemos <span className="italic text-sky-500">tus dudas</span>
          </h2>

          <p className="text-slate-600 mt-4 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            Todo lo que necesitas saber antes de solicitar tu préstamo.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {Questions.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-xl ring-2 ring-sky-500"
                    : "bg-white border border-slate-200 shadow-sm"
                }`}
              >
                {/* Trigger */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold transition ${
                        isOpen
                          ? "bg-sky-500 text-white"
                          : "bg-sky-100 text-sky-600"
                      }`}
                    >
                      {index + 1}
                    </span>

                    <span className="text-sm sm:text-base font-semibold text-slate-800">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                      isOpen ? "bg-sky-100 rotate-180" : "bg-slate-100"
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      className={`${
                        isOpen ? "text-sky-600" : "text-slate-400"
                      }`}
                    />
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="h-px bg-slate-200 mb-4" />
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 text-sm mb-4">
            ¿No encontraste tu respuesta?
          </p>

          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold bg-sky-500 text-white transition hover:scale-105 hover:bg-sky-600"
          >
            Contáctanos
            <ChevronDown size={14} className="-rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
}
