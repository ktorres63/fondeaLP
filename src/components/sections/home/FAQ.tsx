import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la aprobación?",
    answer:
      "La evaluación es rápida y puede completarse en pocos minutos. Una vez aprobado, recibirás la confirmación por nuestros canales digitales.",
  },
  {
    question: "¿Qué documentos necesito para solicitar un préstamo?",
    answer:
      "Solo necesitas tu DNI vigente, un número de celular propio y una cuenta bancaria activa para recibir el desembolso.",
  },
  {
    question: "¿Puedo pagar antes de la fecha acordada?",
    answer:
      "Sí, puedes adelantar pagos o cancelar tu préstamo antes del plazo establecido sin complicaciones.",
  },
  {
    question: "¿Cómo sé cuánto pagaré cada mes?",
    answer:
      "Antes de confirmar tu solicitud podrás revisar el monto, cuotas y cronograma de pagos de forma transparente.",
  },
  {
    question: "¿Mis datos están protegidos?",
    answer:
      "Sí, toda la información se procesa bajo protocolos de seguridad para proteger tus datos personales.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-4">
          Preguntas frecuentes
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Resolvemos tus dudas antes de solicitar tu préstamo.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
