import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tarda la aprobación?",
    answer:
      "La evaluación toma solo unos minutos. Si tu solicitud es aprobada, recibirás la confirmación de inmediato y podrás acceder al dinero sin demoras.",
  },
  {
    question: "¿Qué necesito para solicitar un préstamo?",
    answer:
      "Solo necesitas tu DNI vigente, un número de celular activo y una cuenta bancaria a tu nombre para recibir el desembolso.",
  },
  {
    question: "¿Puedo pagar antes de tiempo?",
    answer:
      "Sí. Puedes adelantar pagos o cancelar tu préstamo cuando quieras, sin procesos complicados.",
  },
  {
    question: "¿Cómo sé cuánto voy a pagar?",
    answer:
      "Antes de confirmar, verás claramente el monto total, las cuotas y el cronograma completo. Sin sorpresas ni costos ocultos.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Sí. Utilizamos protocolos de seguridad de nivel bancario para proteger tu información en todo momento.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Resolvemos tus dudas
          </h2>

          <p className="text-white/80 mt-4 text-lg max-w-xl mx-auto">
            Todo lo que necesitas saber antes de solicitar tu préstamo.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-1">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/95 backdrop-blur rounded-2xl px-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-900 py-5">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-white/80 mb-4">¿Aún tienes dudas?</p>

          <button className="px-8 py-3 rounded-full bg-lime-400 text-black font-semibold hover:scale-105 transition">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
