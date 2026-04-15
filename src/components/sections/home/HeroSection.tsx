import { Link } from "react-router";
import LoanCalculator from "@/components/sections/home/Calculator";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".hero-btn",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.4,
          ease: "power3.out",
        },
      );

      gsap.from(".hero-calculator", {
        x: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden px-4 min-h-[90vh]"
    >
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
        {/* Left */}
        <div className="text-center lg:text-left">
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Tu préstamo en minutos,{" "}
            <span className="text-lime-400">sin complicaciones</span>
          </h1>

          <p className="hero-text mt-6 text-white/80 text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
            Accede a préstamos personales de hasta S/ 10,000 de forma rápida,
            segura y 100% online. Sin filas, sin papeleos.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/registrate"
              className="hero-btn inline-flex items-center justify-center bg-lime-400 text-neutral-900  hover:scale-105 transition font-bold text-base hover:opacity-90 px-8 py-3 rounded-md"
            >
              Solicitar préstamo
            </Link>

            <Link
              to="/#como-funciona"
              className="hero-btn inline-flex items-center justify-center font-semibold text-base border border-white text-white hover:bg-white/10 transition-colors px-8 py-3 rounded-md"
            >
              ¿Cómo funciona?
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="hero-calculator flex justify-center lg:justify-end">
          <LoanCalculator />
        </div>
      </div>
    </section>
  );
}
