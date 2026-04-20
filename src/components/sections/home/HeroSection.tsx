import { Link } from "react-router";
import LoanCalculator from "@/components/LoanCalculator/LoanCalculator";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type HeroSlide = {
  title: string;
  titleHighlight: string;
  description: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Tu préstamo en minutos,",
    titleHighlight: "sin complicaciones",
    description: "Accede a préstamos personales de hasta S/ 10,000 de forma rápida, segura y 100% online. Sin filas, sin papeleos.",
    badge: "Registrado en la SBS",
    imageSrc: "/hero/mujer-feliz.png",
    imageAlt: "Mujer feliz con préstamo aprobado",
  },
  {
    title: "Solicita online y",
    titleHighlight: "recibe respuesta rápida",
    description: "Compara tu perfil de pago, revisa tu cronograma y elige la opción que mejor se adapta a tu bolsillo.",
    badge: "Proceso seguro y transparente",
    imageSrc: "/hero/mujer-feliz.png",
    imageAlt: "Mujer revisando opciones de préstamo",
  },
  {
    title: "Ajusta tu préstamo y",
    titleHighlight: "toma la mejor decisión",
    description: "Simula montos y cuotas en segundos para ver claramente cuánto pagarías según tu perfil.",
    badge: "Simulación inmediata",
    imageSrc: "/hero/mujer-feliz.png",
    imageAlt: "Mujer comparando cuotas de préstamo",
  },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const desktopCalculatorRef = useRef<HTMLDivElement>(null);
  const resumeAutoplayTimeoutRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [calculatorHeight, setCalculatorHeight] = useState<number | null>(null);

  const currentSlide = HERO_SLIDES[activeSlide];
  const totalSlides = HERO_SLIDES.length;

  function goToSlide(index: number) {
    setActiveSlide((index + totalSlides) % totalSlides);
  }

  function pauseAutoplayTemporarily() {
    setIsAutoplayEnabled(false);
    if (resumeAutoplayTimeoutRef.current) {
      window.clearTimeout(resumeAutoplayTimeoutRef.current);
    }
    resumeAutoplayTimeoutRef.current = window.setTimeout(() => {
      setIsAutoplayEnabled(true);
      resumeAutoplayTimeoutRef.current = null;
    }, 9000);
  }

  function goToNextSlide(withPause = false) {
    if (withPause) pauseAutoplayTemporarily();
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }

  function goToPrevSlide(withPause = false) {
    if (withPause) pauseAutoplayTemporarily();
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }

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

  useEffect(() => {
    if (!isAutoplayEnabled) return;

    const interval = window.setInterval(() => {
      goToNextSlide(false);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isAutoplayEnabled]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktopState = (event: MediaQueryList | MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    updateDesktopState(mediaQuery);
    mediaQuery.addEventListener("change", updateDesktopState);

    return () => {
      mediaQuery.removeEventListener("change", updateDesktopState);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !desktopCalculatorRef.current) {
      return;
    }

    const node = desktopCalculatorRef.current;
    const updateHeight = () => {
      const nextHeight = node.offsetHeight;
      if (nextHeight > 0) {
        setCalculatorHeight(nextHeight);
      }
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(node);

    return () => observer.disconnect();
  }, [isDesktop]);

  useEffect(() => {
    return () => {
      if (resumeAutoplayTimeoutRef.current) {
        window.clearTimeout(resumeAutoplayTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden"
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
      <div className="relative mx-auto flex w-full max-w-[1640px] flex-col justify-center gap-6 px-4 py-8 sm:px-5 md:gap-8 md:py-10 lg:flex-row lg:items-stretch lg:gap-7 lg:px-5 xl:px-6 2xl:px-8">
        {/* Left side — Carousel section */}
        <div className="flex min-w-0 flex-1 items-stretch lg:flex-[1_1_auto]">
          <div
            className="relative w-full p-3 sm:p-4 lg:p-5 xl:p-6"
            style={{
              height: isDesktop && calculatorHeight ? `${calculatorHeight}px` : undefined,
            }}
            onTouchStart={(e) => {
              touchStartXRef.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartXRef.current === null) return;
              const diff = e.changedTouches[0].clientX - touchStartXRef.current;
              touchStartXRef.current = null;
              if (Math.abs(diff) < 40) return;
              if (diff < 0) goToNextSlide(true);
              if (diff > 0) goToPrevSlide(true);
            }}
          >
            <div key={activeSlide} className="flex flex-col items-center gap-6 lg:h-full lg:flex-row lg:items-center lg:gap-8">
              <div
                className={`
                  hero-person hidden lg:flex items-center justify-center flex-shrink-0
                  transition-all duration-500 ease-in-out overflow-hidden
                  ${isDetailOpen
                    ? "w-0 opacity-0 pointer-events-none"
                    : "w-[300px] xl:w-[340px] opacity-100"}
                `}
              >
                <img
                  src={currentSlide.imageSrc}
                  alt={currentSlide.imageAlt}
                  className="w-full h-auto object-contain object-center drop-shadow-2xl"
                  style={{ maxHeight: "min(58svh, 640px)" }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>

              <div className="flex flex-1 min-w-0 flex-col justify-center text-center lg:text-left">
                <h1 className="hero-title text-[2rem] sm:text-[2.3rem] md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  {currentSlide.title}{" "}
                  <span className="block">{currentSlide.titleHighlight}</span>
                </h1>

                <div className="hero-badge mt-6 flex justify-center lg:justify-start">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-sm font-semibold shadow-md"
                    style={{ backgroundColor: "#3db54a" }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <circle cx="7.5" cy="7.5" r="7.5" fill="rgba(255,255,255,0.25)" />
                      <path d="M4 7.5L6.5 10.5L11 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {currentSlide.badge}
                  </span>
                </div>

                <p className="hero-text mt-5 text-white font-semibold text-sm sm:text-base md:text-lg leading-snug">
                  {currentSlide.description}
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

            <div className="mt-8 flex items-center justify-center gap-3 lg:mt-5 lg:justify-start">
              <button
                type="button"
                aria-label="Slide anterior"
                onClick={() => goToPrevSlide(true)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/12 text-white transition hover:bg-white/20 hover:scale-105"
              >
                <span aria-hidden="true">‹</span>
              </button>
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir al slide ${i + 1}`}
                  onClick={() => {
                    pauseAutoplayTemporarily();
                    goToSlide(i);
                  }}
                  className={`block rounded-full transition-all duration-300 ${
                    i === activeSlide ? "w-7 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/45 hover:bg-white/70"
                  }`}
                />
              ))}
              <button
                type="button"
                aria-label="Slide siguiente"
                onClick={() => goToNextSlide(true)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/12 text-white transition hover:bg-white/20 hover:scale-105"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side — Calculator */}
        <div ref={desktopCalculatorRef} className="hero-calculator hidden lg:flex lg:basis-[430px] xl:basis-[470px] items-center justify-end gap-3 flex-shrink-0 py-4 lg:py-6">
          <LoanCalculator onDetailToggle={setIsDetailOpen} />
        </div>

        {/* Mobile calculator */}
        <div className="hero-calculator flex lg:hidden justify-center w-full px-0 sm:px-2 pb-1 sm:pb-3">
          <LoanCalculator onDetailToggle={setIsDetailOpen} />
        </div>
      </div>
    </section>
  );
}