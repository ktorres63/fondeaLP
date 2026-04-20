import { Link } from "react-router";
import LoanCalculator from "@/components/LoanCalculator/LoanCalculator";
import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Selección aleatoria de imagen (una sola vez al cargar)
  const randomHeroImage = useMemo(() => {
    const images = ['/hero/mujer-feliz.png', '/hero/hombre-feliz.png'];
    return images[Math.floor(Math.random() * images.length)];
  }, []);

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

      <div className="relative max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start justify-between min-h-[75vh] px-4">
        {/* Left - Content con imagen de persona */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center lg:items-end gap-6">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-3">
              Tu préstamo en minutos,{" "}
              <span className="text-[#c3f934] block mt-1">sin complicaciones</span>
            </h1>

            <p className="hero-text mt-3 md:mt-4 text-white/90 text-sm md:text-base lg:text-base leading-relaxed mx-auto lg:mx-0">
              Accede a préstamos personales de hasta <span className="font-bold text-[#c3f934]">S/ 10,000</span> de forma rápida,
              segura y 100% online. Sin filas, sin papeleos.
            </p>

            {/* Buttons */}
            <div className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/registrate"
                className="hero-btn inline-flex items-center justify-center bg-[#c3f934] text-black hover:bg-[#b3e824] hover:scale-105 transition-all duration-300 font-bold text-sm shadow-xl shadow-lime-400/30 px-6 py-3 rounded-xl"
              >
                Solicitar préstamo
              </Link>

              <Link
                to="/#como-funciona"
                className="hero-btn inline-flex items-center justify-center font-bold text-sm border-2 border-white text-white hover:bg-white hover:text-[#00a9e0] transition-all duration-300 px-6 py-3 rounded-xl"
              >
                ¿Cómo funciona?
              </Link>
            </div>
          </div>

          {/* Person Image - Se oculta cuando el panel está abierto */}
          {!isDetailOpen && (
            <div className="hidden lg:block hero-person relative w-48 xl:w-64 h-64 xl:h-80 -mb-16 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-[#00a9e0]/20 to-transparent rounded-3xl pointer-events-none z-10" />
              {/* Person image */}
              <div className="relative w-full h-full flex items-end justify-center">
                <img
                  src={randomHeroImage}
                  alt="Persona feliz con préstamo aprobado"
                  className="w-full h-full object-cover object-center rounded-3xl shadow-2xl"
                  onError={(e) => {
                    // Fallback si la imagen no existe
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 flex items-center justify-center';
                    fallback.innerHTML = '<span class="text-white/50 text-xs text-center px-4">Agregar imagen en:<br/>/public/hero/</span>';
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Right - Calculator (con espacio para el panel) */}
        <div className="hero-calculator flex justify-center lg:justify-end z-10 flex-shrink-0">
          <LoanCalculator onDetailToggle={setIsDetailOpen} />
        </div>
      </div>
    </section>
  );
}
