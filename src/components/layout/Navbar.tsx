import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const desktopLinks = [
  { label: "¿Cómo funciona?", to: "/como-funciona" },
  { label: "¿Cómo pagar?", to: "/como-pagar" },
  { label: "Renueva tu préstamo", to: "/renueva-tu-prestamo" },
];

const menuLinks = [
  ...desktopLinks,
  // { label: "Extensión de pago", to: "/extension-de-pago" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Blog", to: "/blog" },
  { label: "Preguntas frecuentes", to: "/preguntas-frecuentes" },
  { label: "Contacto", to: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md shadow-md bg-linear-to-br from-sky-500 to-sky-600"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto py-3 px-2 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logoFondea.png" alt="Logo" className="h-12" />
          </Link>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-1">
              {desktopLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm px-4 py-2 transition-all font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white "
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA desktop */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="font-bold text-sm rounded-xl bg-transparent text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300"
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
        className={`fixed right-0 top-0 w-80 h-screen bg-linear-to-br from-sky-500 to-sky-600 shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-2 h-full">
          {/* Close button */}
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logoFondea.png" alt="Logo" className="h-8" />
            </Link>

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
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-bold transition ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA mobile */}
          <div className="mt-auto pt-6">
            <Button
              asChild
              className="w-full bg-lime-400 text-black font-semibold hover:opacity-90"
            >
              <Link to="/registrate">Zona de clientes</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
