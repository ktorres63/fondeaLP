import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import reactLogo from "@/assets/react.svg";

const links = [
  { label: "¿Cómo funciona?", to: "/como-funciona" },
  { label: "¿Cómo pagar?", to: "/como-pagar" },
  { label: "Renueva tu préstamo", to: "/renueva-tu-prestamo" },
  { label: "Extensión de pago", to: "/extension-de-pago" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Blog", to: "/blog" },
  { label: "Preguntas frecuentes", to: "/preguntas-frecuentes" },
  { label: "Contacto", to: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#0EA5E9" }} className="w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={reactLogo} alt="Logo" className="h-8 w-8" />
          <span className="text-white font-bold text-lg tracking-tight">
            FinTech
          </span>
        </Link>

        {/* Links desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm px-3 py-1.5 rounded-md transition-colors font-medium ${
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

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            style={{ backgroundColor: "#A3E635", color: "#1a1a1a" }}
            className="font-semibold hover:opacity-90 transition-opacity"
          >
            <Link to="/registrate">Regístrate</Link>
          </Button>
        </div>

        {/* Hamburger mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm px-3 py-2 rounded-md transition-colors font-medium ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            asChild
            style={{ backgroundColor: "#A3E635", color: "#1a1a1a" }}
            className="mt-2 font-semibold w-full"
          >
            <Link to="/registrate">Regístrate</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
