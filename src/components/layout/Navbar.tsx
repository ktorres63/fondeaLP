import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToCalculator } from "@/hooks/useScrollToCalculator";

const desktopLinks = [
  { label: "¿Cómo funciona?", to: "/como-funciona", sectionId: "como-funciona" },
  { label: "¿Cómo pagar?", to: "/como-pagar", sectionId: "como-pagar" },
  { label: "Renueva tu préstamo", to: "/renueva-tu-prestamo", sectionId: null },
];

const menuLinks = [
  ...desktopLinks,
  // { label: "Extensión de pago", to: "/extension-de-pago" },
  { label: "Nosotros", to: "/nosotros", sectionId: null },
  { label: "Blog", to: "/blog", sectionId: null },
  { label: "Preguntas frecuentes", to: "/#preguntas-frecuentes", sectionId: "preguntas-frecuentes" },
  { label: "Contacto", to: "/contacto", sectionId: null },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToCalculator = useScrollToCalculator();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detectar sección activa solo en home
      if (isHome) {
        const sections = ["como-funciona", "como-pagar"];
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Si la sección está visible en viewport (con margen)
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      // Actualizar URL con hash
      window.history.pushState(null, "", `/#${sectionId}`);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, link: typeof desktopLinks[0]) => {
    // Si tiene sección y estamos en home, hacer scroll
    if (isHome && link.sectionId) {
      e.preventDefault();
      scrollToSection(link.sectionId);
    } else if (!isHome && link.sectionId) {
      // Si no estamos en home pero tiene sección, navegar a home con hash
      e.preventDefault();
      navigate(`/#${link.sectionId}`);
    }
    // Si no tiene sección, deja que navegue normal
  };

  // Manejar hash al cargar la página
  useEffect(() => {
    if (isHome && location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [isHome, location.hash]);

  const isLinkActive = (link: typeof desktopLinks[0]) => {
    if (isHome && link.sectionId) {
      return activeSection === link.sectionId;
    }
    return location.pathname === link.to;
  };

  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md shadow-lg bg-gradient-to-r from-[#00a9e0] to-[#0088cc]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto py-3 px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToCalculator} className="flex items-center gap-2 cursor-pointer">
            <img src="/logoFondea.png" alt="Logo" className="h-12" />
          </button>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-1">
              {desktopLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-sm px-4 py-2 transition-all font-bold rounded-lg cursor-pointer ${
                    isLinkActive(link)
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA desktop */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="font-bold text-sm rounded-xl bg-[#c3f934] text-black hover:bg-[#b3e824] border-0 transition-all duration-300 shadow-md"
              >
                <Link to="/registrate">Zona de clientes</Link>
              </Button>
            </div>

            {/* Menu button */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-white p-2 rounded-xl hover:bg-white/10 transition"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`fixed right-0 top-0 w-80 h-screen bg-gradient-to-br from-[#00a9e0] to-[#0088cc] shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-2 h-full">
          {/* Close button */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => {
                scrollToCalculator();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="/logoFondea.png" alt="Logo" className="h-8" />
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <X size={24} className="text-white" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-1">
            {menuLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => {
                  handleLinkClick(e, link);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-sm font-bold transition cursor-pointer ${
                  isLinkActive(link)
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA mobile */}
          <div className="mt-auto pt-6">
            <Button
              asChild
              className="w-full bg-[#c3f934] text-black font-bold hover:bg-[#b3e824] rounded-xl shadow-md"
            >
              <Link to="/registrate">Zona de clientes</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
