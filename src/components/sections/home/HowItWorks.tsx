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
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">
            Proceso
          </span>
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
// export default function HowItWorks() {
//   return (
//     <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//         {/* LEFT */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold text-sky-900">
//             ¿Cómo Funciona?
//           </h2>

//           <p className="mt-4 text-lg text-slate-600 max-w-xl">
//             Diseñamos un proceso arquitectónico para tu tranquilidad financiera.
//             Transparente, rápido y totalmente digital.
//           </p>

//           {/* Steps */}
//           <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
//             {steps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <div
//                   key={index}
//                   className="group flex flex-col items-center text-center cursor-pointer"
//                 >
//                   <div
//                     className={`
//                       flex items-center justify-center w-16 h-16 rounded-full shadow-md
//                       transition-all duration-300
//                       bg-white text-sky-800
//                       group-hover:bg-sky-500 group-hover:text-white
//                       hover:scale-110
//                     `}
//                   >
//                     <Icon size={28} className="transition-all duration-300" />
//                   </div>

//                   <p className="mt-3 text-sm md:text-base font-medium text-slate-800">
//                     {step.title}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* CTA */}
//           <button className="mt-10 px-6 py-3 rounded-full bg-lime-500 text-white font-semibold shadow-md hover:scale-105 transition">
//             Solicita tu préstamo
//           </button>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative">
//           <img
//             src="/como-funciona.jpg"
//             alt="Proceso digital"
//             className="rounded-2xl shadow-lg w-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
