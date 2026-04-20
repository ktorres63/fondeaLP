import { Link } from "react-router";
import LoanCalculator from "@/components/LoanCalculator/LoanCalculator";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useScrollToCalculator } from "@/hooks/useScrollToCalculator";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
    description:
      "Accede a préstamos personales de hasta S/ 10,000 de forma rápida, segura y 100% online. Sin filas, sin papeleos.",
    badge: "Registrado en la SBS",
    imageSrc: "/hero/mujer-feliz.png",
    imageAlt: "Mujer feliz con préstamo aprobado",
  },
  {
    title: "Solicita online y",
    titleHighlight: "recibe respuesta rápida",
    description:
      "Compara tu perfil de pago, revisa tu cronograma y elige la opción que mejor se adapta a tu bolsillo.",
    badge: "Proceso seguro y transparente",
    imageSrc: "/hero/mujer-feliz.png",
    imageAlt: "Mujer revisando opciones de préstamo",
  },
  {
    title: "Ajusta tu préstamo y",
    titleHighlight: "toma la mejor decisión",
    description:
      "Simula montos y cuotas en segundos para ver claramente cuánto pagarías según tu perfil.",
    badge: "Simulación inmediata",
    imageSrc: "/hero/mujer-feliz.png",
    imageAlt: "Mujer comparando cuotas de préstamo",
  },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollToCalculator = useScrollToCalculator();

  const currentSlide = HERO_SLIDES[activeSlide];

  // Entrada inicial con GSAP
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
      gsap.fromTo(
        ".hero-btn",
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
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 18% 20%, #36d5f7 0%, #10bde9 20%, transparent 42%), radial-gradient(circle at 82% 15%, rgba(116,211,255,0.45) 0%, transparent 34%), linear-gradient(130deg, #14c8ef 0%, #00a9e0 32%, #0077c8 68%, #0052a8 100%)",
      }}
    >
      {/* ── Capas decorativas de fondo ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
        <div
          className="absolute inset-0 opacity-[0.17]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent 78%)",
          }}
        />
        <svg
          className="absolute left-0 top-0 h-full w-[45%] opacity-[0.18]"
          viewBox="0 0 600 520"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="200" cy="260" rx="420" ry="340" fill="white" />
        </svg>
      </div>

      {/* ── Layout principal ── */}
      {/*
        Desktop: fila con items-stretch → ambas columnas tienen la misma altura automáticamente.
        - Columna izquierda (carrusel): flex-1, cede espacio cuando el detalle abre.
        - Columna derecha (calculadora): flex-shrink-0, determina la altura total de la fila.
      */}
      <div className="relative mx-auto flex w-full max-w-[1640px] flex-col gap-6 px-4 py-8 sm:px-5 md:gap-8 md:py-10 lg:flex-row lg:items-stretch lg:gap-7 lg:px-5 xl:px-6 2xl:px-8">

        {/* ── Carrusel (columna izquierda en desktop) ── */}
        <div
          className={`
            hero-calculator
            relative flex min-w-0 flex-col items-center justify-center
            transition-[flex-basis,max-width] duration-500 ease-in-out
            lg:flex-1 lg:overflow-hidden
          `}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet hero-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active hero-pagination-bullet-active'
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.activeIndex);
            }}
            className="w-full"
          >
            {HERO_SLIDES.map((slide, index) => (
              <SwiperSlide key={index}>
                {/* Contenido del slide: ocupa todo el alto disponible en desktop */}
                <div className="flex flex-col justify-center p-3 sm:p-4 lg:p-5 xl:p-6 min-h-[500px] lg:min-h-[600px]">
                  {/* Fila imagen + texto: se estira al alto de la calculadora */}
                  <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-8">

                    {/* Imagen: visible solo en desktop, se colapsa con w-0 al abrir detalle */}
                    <div
                      className={`
                        hero-person
                        hidden lg:flex items-end justify-center self-end flex-shrink-0
                        overflow-hidden
                        transition-[width,opacity] duration-500 ease-in-out
                        ${isDetailOpen ? "w-0 opacity-0 pointer-events-none" : "w-[280px] xl:w-[320px] opacity-100"}
                      `}
                    >
                      <img
                        src={slide.imageSrc}
                        alt={slide.imageAlt}
                        className="h-auto w-full object-contain object-bottom drop-shadow-2xl"
                        style={{ maxHeight: "min(55svh, 580px)" }}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    {/* Texto */}
                    <div className="flex min-w-0 flex-1 flex-col justify-center text-center lg:text-left">
                      <h1 className="hero-title text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.3rem] md:text-5xl xl:text-6xl">
                        {slide.title}{" "}
                        <span className="block">{slide.titleHighlight}</span>
                      </h1>

                      <div className="hero-badge mt-6 flex justify-center lg:justify-start">
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white shadow-md"
                          style={{ backgroundColor: "#3db54a" }}
                        >
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <circle cx="7.5" cy="7.5" r="7.5" fill="rgba(255,255,255,0.25)" />
                            <path d="M4 7.5L6.5 10.5L11 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {slide.badge}
                        </span>
                      </div>

                      <p className="hero-text mt-5 text-sm font-semibold leading-snug text-white sm:text-base md:text-lg">
                        {slide.description}
                      </p>

                      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                        <button
                          onClick={scrollToCalculator}
                          className="hero-btn inline-flex w-full items-center justify-center rounded-xl bg-[#c3f934] px-8 py-3.5 text-sm font-bold text-black shadow-lg shadow-lime-400/25 transition-all duration-200 hover:scale-105 hover:bg-[#b3e824] active:scale-95 sm:w-auto"
                        >
                          Solicitar préstamo
                        </button>
                        <Link
                          to="/#como-funciona"
                          className="hero-btn inline-flex w-full items-center justify-center rounded-xl border-2 border-white/80 px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#00a9e0] sm:w-auto"
                        >
                          ¿Cómo funciona?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation and pagination styles */}
          <style>{`
            /* Navigation arrows - more subtle */
            .swiper-button-next,
            .swiper-button-prev {
              background: rgba(255, 255, 255, 0.08);
              backdrop-filter: blur(4px);
              width: 36px;
              height: 36px;
              border-radius: 50%;
              border: 1px solid rgba(255, 255, 255, 0.2);
              transition: all 0.3s;
              opacity: 0.6;
            }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background: rgba(255, 255, 255, 0.15);
              opacity: 1;
              transform: scale(1.05);
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 14px;
              font-weight: 600;
              color: white;
            }

            /* Pagination bullets */
            .hero-pagination-bullet {
              width: 8px;
              height: 8px;
              background: rgba(255, 255, 255, 0.4);
              opacity: 1;
              transition: all 0.3s;
              margin: 0 3px !important;
            }

            .hero-pagination-bullet:hover {
              background: rgba(255, 255, 255, 0.65);
            }

            .hero-pagination-bullet-active {
              background: white;
              width: 24px;
              border-radius: 4px;
            }

            .swiper-pagination {
              bottom: 16px !important;
              text-align: center !important;
              padding: 0 1rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            @media (min-width: 1024px) {
              .swiper-pagination {
                text-align: left !important;
                justify-content: flex-start;
                padding-left: 1.25rem;
                bottom: 20px !important;
              }
            }

            @media (max-width: 768px) {
              .swiper-button-next,
              .swiper-button-prev {
                width: 32px;
                height: 32px;
              }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 12px;
              }
            }
          `}</style>
        </div>

        {/* ── Calculadora (columna derecha en desktop) ── */}
        {/*
          flex-shrink-0: la calculadora nunca se comprime.
          Su alto define la altura de toda la fila (items-stretch en el padre).
          Al abrirse el detalle la calculadora puede expandirse horizontalmente
          y el carrusel (flex-1) le cede el espacio sin overflow.
        */}
        {/*
          Sin basis fijo: la calculadora ocupa lo que su contenido necesite.
          Cuando el detalle abre, LoanCalculator crece a la derecha (flex-row interno)
          y el carrusel (flex-1 con min-w-0) le cede el espacio sin overflow.
        */}
        <div id="calculadora" className="hero-calculator flex flex-shrink-0 items-center justify-center">
          <LoanCalculator onDetailToggle={setIsDetailOpen} />
        </div>
      </div>
    </section>
  );
}