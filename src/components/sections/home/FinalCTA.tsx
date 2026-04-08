import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 text-center bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
          ¿Listo para empezar?
        </h2>

        <p className=" mb-8 text-lg">
          Solicita tu préstamo hoy y recibe el dinero en menos de 24 horas.
        </p>

        <Button
          asChild
          size="lg"
          className="font-bold text-base px-10 bg-lime-400 text-black hover:opacity-90"
        >
          <Link to="/registrate">Solicitar ahora</Link>
        </Button>
      </div>
    </section>
  );
}
