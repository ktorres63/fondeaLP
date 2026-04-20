import StepCarousel from "@/components/ui2/StepCarousel.tsx";
import { useScrollToCalculator } from "@/hooks/useScrollToCalculator";
import SEO from "@/components/SEO";

export default function HowItWorksPage() {
  const scrollToCalculator = useScrollToCalculator();
  const steps = [
    {
      title: "Ingresa tu monto y fecha",
      description:
        "Elige el monto que necesitas y la fecha en que deseas pagarlo.",
      image: "/step1.png",
    },
    {
      title: "Ingresa tus datos",
      description: "Completa tu información personal de forma rápida y segura.",
      image: "/step2.png",
    },
    {
      title: "Elige tu plan",
      description: "Selecciona el plan de pago que mejor se adapte a ti.",
      image: "/step3.png",
    },
    {
      title: "Forma de pago",
      description: "Recibe tu dinero y elige cómo realizar tus pagos.",
      image: "/step4.png",
    },
  ];

  return (
    <>
      <SEO
        title="¿Cómo Funciona? - FONDEA | Proceso de Préstamo Rápido"
        description="Descubre cómo obtener tu préstamo personal en 3 simples pasos: Solicita online, recibe aprobación rápida y obtén tu dinero en 24 horas. Proceso 100% digital."
        keywords="cómo funciona fondea, proceso préstamo online, solicitar préstamo perú, préstamo rápido"
      />
      <section className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00a9e0] leading-tight">
            ¿Cómo funciona?
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
            Un proceso 100% digital, transparente y diseñado para tu
            tranquilidad financiera.
          </p>
        </div>

        {/* Carousel */}
        <StepCarousel steps={steps} />

        {/* CTA centrado */}
        <div className="mt-12 md:mt-14 flex justify-center">
          <button
            onClick={scrollToCalculator}
            className="
              px-10 py-4 rounded-xl
              bg-[#c3f934] text-black font-bold
              hover:bg-[#b3e824] hover:scale-105 transition-all duration-300
              shadow-lg hover:shadow-xl
            "
          >
            Solicitar préstamo
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
