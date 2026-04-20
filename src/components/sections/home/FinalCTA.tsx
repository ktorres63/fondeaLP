import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-[#00a9e0]">
            Tu próximo paso empieza hoy. Solicita tu crédito de forma simple y
            segura.
          </h2>

          <p className="text-base md:text-lg text-slate-600">
            Solicita tu préstamo hoy y recibe el dinero en menos de 24 horas.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-6">
          <img src="/logoFondeav2.png" alt="Logo" className="h-20" />

          <Button
            asChild
            size="lg"
            className="font-bold text-base px-10 py-6 bg-[#c3f934] text-black hover:bg-[#b3e824] self-center rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Link to="/registrate">Solicitar ahora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
