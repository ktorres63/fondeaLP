import { Link } from "react-router";
import LoanCalculator from "@/components/LoanCalculator/LoanCalculator";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
      });
      gsap.from(".hero-badge", {
        y: 20, opacity: 0, duration: 0.7, delay: 0.25, ease: "power3.out",
      });
      gsap.from(".hero-text", {
        y: 30, opacity: 0, duration: 0.8, delay: 0.35, ease: "power3.out",
      });
      gsap.fromTo(".hero-btn",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, delay: 0.5, ease: "power3.out" }
      );
      gsap.from(".hero-person", {
        x: -50, opacity: 0, duration: 1.1, delay: 0.15, ease: "power3.out",
      });
      gsap.from(".hero-calculator", {
        x: 50, opacity: 0, duration: 1.1, delay: 0.3, ease: "power3.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[100svh]"
      style={{
        background: "radial-gradient(circle at 18% 20%, #36d5f7 0%, #10bde9 20%, transparent 42%), radial-gradient(circle at 82% 15%, rgba(116, 211, 255, 0.45) 0%, transparent 34%), linear-gradient(130deg, #14c8ef 0%, #00a9e0 32%, #0077c8 68%, #0052a8 100%)",
      }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 right-0 h-[700px] w-[700px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(167,236,255,0.55) 0%, rgba(75,205,245,0.25) 42%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 -left-20 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(0,180,240,0.6) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 right-[-70px] h-[420px] w-[420px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(195,249,52,0.5) 0%, rgba(195,249,52,0.15) 36%, transparent 72%)" }}
        />
        {/* Soft arcs */}
        <svg
          className="absolute -left-16 top-[14%] h-[78%] w-[46%] opacity-35"
          viewBox="0 0 520 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroArcA" x1="40" y1="0" x2="440" y2="490" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="heroArcB" x1="140" y1="40" x2="470" y2="470" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(154,241,255,0.65)" />
              <stop offset="100%" stopColor="rgba(154,241,255,0)" />
            </linearGradient>
          </defs>
          <path d="M22 436C40 252 188 104 382 81" stroke="url(#heroArcA)" strokeWidth="56" strokeLinecap="round" />
          <path d="M71 468C91 290 226 149 403 130" stroke="url(#heroArcB)" strokeWidth="28" strokeLinecap="round" />
        </svg>
        <svg
          className="absolute -right-14 top-0 hidden h-[60%] w-[42%] opacity-30 md:block"
          viewBox="0 0 520 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroArcC" x1="120" y1="0" x2="490" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <path d="M66 68C238 22 396 74 478 210" stroke="url(#heroArcC)" strokeWidth="34" strokeLinecap="round" />
        </svg>
        {/* Subtle mesh dots */}
        <div
          className="absolute inset-0 opacity-[0.17]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent 78%)",
          }}
        />
        {/* Organic wave behind person area */}
        <svg
          className="absolute left-0 top-0 h-full w-[45%] opacity-18"
          viewBox="0 0 600 520"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="200" cy="260" rx="420" ry="340" fill="white" />
        </svg>
      </div>

      {/* ── Main layout ── */}
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-center gap-6 px-4 py-8 sm:px-6 md:gap-8 md:py-10 lg:flex-row lg:items-stretch lg:gap-3 lg:px-8 lg:py-6 xl:px-10">

        {/* COL 1 — Person image, vertically centered, hides when detail open */}
        <div
          className={`
            hero-person hidden lg:flex items-center justify-center flex-shrink-0
            transition-all duration-500 ease-in-out overflow-hidden
            ${isDetailOpen
              ? "w-0 opacity-0 pointer-events-none"
              : "mx-auto w-[170px] sm:w-[210px] md:w-[240px] lg:mx-0 lg:w-[240px] xl:w-[300px] opacity-100"}
          `}
        >
          <img
            src="/hero/mujer-feliz.png"
            alt="Persona feliz con préstamo aprobado"
            className="w-full h-auto object-contain object-center drop-shadow-2xl"
            style={{ maxHeight: "min(44svh, 460px)" }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>

        {/* COL 2 — Text content, always centered */}
        <div className="flex flex-1 items-center justify-center px-1 sm:px-2 lg:px-6 xl:px-10">
          <div className="w-full max-w-xl text-center lg:text-left">
            <h1 className="hero-title text-[2rem] sm:text-[2.3rem] md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Tu préstamo en minutos,{" "}
              <span className="block">sin complicaciones</span>
            </h1>

            {/* SBS badge */}
            <div className="hero-badge mt-6 flex justify-center lg:justify-start">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-sm font-semibold shadow-md"
                style={{ backgroundColor: "#3db54a" }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="7.5" fill="rgba(255,255,255,0.25)" />
                  <path d="M4 7.5L6.5 10.5L11 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Registrado en la SBS
              </span>
            </div>

            <p className="hero-text mt-5 text-white font-semibold text-sm sm:text-base md:text-lg leading-snug">
              Accede a préstamos personales de hasta{" "}
              <span className="text-[#c3f934]">S/ 10,000</span>{" "}
              de forma rápida, segura y 100% online. Sin filas, sin papeleos.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/registrate"
                className="hero-btn inline-flex w-full sm:w-auto items-center justify-center bg-[#c3f934] text-black hover:bg-[#b3e824] hover:scale-105 active:scale-95 transition-all duration-200 font-bold text-sm shadow-lg shadow-lime-400/25 px-8 py-3.5 rounded-xl"
              >
                Solicitar préstamo
              </Link>
              <Link
                to="/#como-funciona"
                className="hero-btn inline-flex w-full sm:w-auto items-center justify-center font-bold text-sm border-2 border-white/80 text-white hover:bg-white hover:text-[#00a9e0] transition-all duration-200 px-8 py-3.5 rounded-xl"
              >
                ¿Cómo funciona?
              </Link>
            </div>
          </div>
        </div>

        {/* COL 3 — Calculator + detail panel side by side */}
        <div className="hero-calculator hidden lg:flex items-center justify-end gap-3 flex-shrink-0 py-4 lg:py-6 xl:pr-4">
          <LoanCalculator onDetailToggle={setIsDetailOpen} />
        </div>

        {/* Mobile calculator */}
        <div className="hero-calculator flex lg:hidden justify-center w-full px-0 sm:px-2 pb-1 sm:pb-3">
          <LoanCalculator onDetailToggle={setIsDetailOpen} />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-2 items-center">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`block rounded-full transition-all duration-300 ${
              i === 0 ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}