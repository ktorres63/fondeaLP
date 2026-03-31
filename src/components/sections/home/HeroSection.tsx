import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import LoanCalculator from "@/components/sections/home/Calculator";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20"
      style={{
        background: "linear-gradient(135deg, #08172E ,0%, #102A5C 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Tu préstamo en minutos,{" "}
            <span style={{ color: "#A3E635" }}>sin complicaciones</span>
          </h1>

          <p className="mt-6 text-white/80 text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
            Accede a préstamos personales de hasta S/ 10,000 de forma rápida,
            segura y 100% online. Sin filas, sin papeleos.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: "#A3E635", color: "#1a1a1a" }}
              className="font-bold text-base hover:opacity-90 transition-opacity px-8"
            >
              <Link to="/registrate">Solicitar préstamo</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold text-base border-white text-white hover:bg-white/10 px-8"
            >
              <Link to="/#como-funciona">¿Cómo funciona?</Link>
            </Button>
          </div>
        </div>

        {/* Right Calculator */}
        <div className="flex justify-center lg:justify-end">
          <LoanCalculator />
        </div>
      </div>
    </section>
  );
}
