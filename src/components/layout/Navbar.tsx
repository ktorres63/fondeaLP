import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import reactLogo from "@/assets/react.svg";

const desktopLinks = [
  { label: "¿Cómo funciona?", to: "/como-funciona" },
  { label: "¿Cómo pagar?", to: "/como-pagar" },
  { label: "Renueva tu préstamo", to: "/renueva-tu-prestamo" },
];

const menuLinks = [
  ...desktopLinks,
  { label: "Extensión de pago", to: "/extension-de-pago" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Blog", to: "/blog" },
  { label: "Preguntas frecuentes", to: "/preguntas-frecuentes" },
  { label: "Contacto", to: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={reactLogo} alt="Logo" className="h-8 w-8" />
            <span className="text-white font-bold text-lg tracking-tight">
              Fondea
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {desktopLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm px-4 py-2 rounded-xl transition-all font-medium ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* CTA desktop */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="font-semibold rounded-xl bg-lime-400 text-black hover:opacity-90"
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

      {/* Side panel */}
      <div
        className={`fixed right-0 top-0 w-80 h-screen bg-white shadow-2xl border-l border-slate-200 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-2">
          {/* Close button */}
          <div className="flex justify-between mb-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={reactLogo} alt="Logo" className="h-8 w-8" />
              <span className="text-black font-bold text-lg tracking-tight">
                Fondea
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition"
            >
              <X size={24} className="text-slate-700" />
            </button>
          </div>

          {/* Links */}
          {menuLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-sky-100 text-sky-600"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* CTA mobile */}
          <Button
            asChild
            className="mt-4 bg-lime-400 text-black hover:opacity-90"
          >
            <Link to="/registrate">Zona de clientes</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
