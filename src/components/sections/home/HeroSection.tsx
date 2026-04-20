import { Link } from "react-router";
import LoanCalculator from "@/components/LoanCalculator/LoanCalculator";
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
      className="relative overflow-hidden px-4 min-h-[85vh] pt-8 pb-16"
    >
      {/* Complex decorative background elements inspired by Figma */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large organic shapes */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-cyan-300/30 to-blue-400/20 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute top-1/4 -left-60 w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/25 to-cyan-300/15 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-sky-300/20 to-blue-500/25 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDuration: '10s'}} />

        {/* Smaller accent shapes */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#c3f934]/10 rounded-full blur-2xl opacity-60" />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-cyan-200/20 rounded-full blur-2xl opacity-50" />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00a9e0]/5 via-transparent to-[#0088cc]/5" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center min-h-[75vh] px-4">
        {/* Left - Content with person image */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-end gap-6">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-4">
              Tu préstamo en minutos,{" "}
              <span className="text-[#c3f934] block mt-1">sin complicaciones</span>
            </h1>

            <p className="hero-text mt-4 md:mt-6 text-white/90 text-sm md:text-base lg:text-lg max-w-lg leading-relaxed mx-auto lg:mx-0">
              Accede a préstamos personales de hasta <span className="font-bold text-[#c3f934]">S/ 10,000</span> de forma rápida,
              segura y 100% online. Sin filas, sin papeleos.
            </p>

            {/* Buttons */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Link
                to="/registrate"
                className="hero-btn inline-flex items-center justify-center bg-[#c3f934] text-black hover:bg-[#b3e824] hover:scale-105 transition-all duration-300 font-bold text-sm md:text-base shadow-xl shadow-lime-400/30 px-6 md:px-8 py-3 md:py-3.5 rounded-xl"
              >
                Solicitar préstamo
              </Link>

              <Link
                to="/#como-funciona"
                className="hero-btn inline-flex items-center justify-center font-bold text-sm md:text-base border-2 border-white text-white hover:bg-white hover:text-[#00a9e0] transition-all duration-300 px-6 md:px-8 py-3 md:py-3.5 rounded-xl"
              >
                ¿Cómo funciona?
              </Link>
            </div>
          </div>

          {/* Person Image - Hidden on mobile, shown on lg+ */}
          <div className="hidden lg:block hero-person relative w-64 xl:w-80 h-80 xl:h-96 -mb-16">
            <div className="absolute inset-0 bg-gradient-to-t from-[#00a9e0]/20 to-transparent rounded-3xl" />
            {/* Placeholder for person image - replace with actual image */}
            <div className="relative w-full h-full flex items-end justify-center">
              <div className="w-48 xl:w-56 h-64 xl:h-80 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 flex items-center justify-center">
                <span className="text-white/50 text-sm text-center px-4">Imagen de persona<br/>(reemplazar con foto)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Calculator */}
        <div className="hero-calculator flex justify-center lg:justify-end z-10">
          <div className="w-full max-w-md">
            <LoanCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
