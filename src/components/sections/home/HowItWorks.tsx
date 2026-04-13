import StepCarousel from "@/components/ui2/StepCarousel.tsx";

export default function HowItWorks() {
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
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mt-2 leading-tight">
            ¿Cómo Funciona?
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl leading-relaxed">
            Un proceso 100% digital, transparente y diseñado para tu
            tranquilidad financiera.
          </p>
        </div>
        <StepCarousel steps={steps} />
      </div>
    </section>
  );
}
