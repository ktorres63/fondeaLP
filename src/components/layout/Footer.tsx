import { Link } from "react-router";
import reactLogo from "@/assets/react.svg";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0EA5E9" }}
      className="text-white mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={reactLogo} alt="Logo" className="h-7 w-7" />
            <span className="font-bold text-lg">FinTech</span>
          </div>
          <p className="text-white/70 text-sm">
            Soluciones financieras rápidas y seguras para ti.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-white mb-1">Navegación</h4>
          {[
            { label: "¿Cómo funciona?", to: "/como-funciona" },
            { label: "¿Cómo pagar?", to: "/como-pagar" },
            { label: "Nosotros", to: "/nosotros" },
            { label: "Blog", to: "/blog" },
            { label: "Preguntas frecuentes", to: "/preguntas-frecuentes" },
            { label: "Contacto", to: "/contacto" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-white mb-1">Contacto</h4>
          <p className="text-white/70 text-sm">contacto@fintech.com</p>
          <p className="text-white/70 text-sm">+51 999 999 999</p>
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-4 text-white/50 text-xs">
        © {new Date().getFullYear()} FinTech. Todos los derechos reservados.
      </div>
    </footer>
  );
}
