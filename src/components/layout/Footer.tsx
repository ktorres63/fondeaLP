import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="text-white mt-auto backdrop-blur-md shadow-md bg-linear-to-br from-sky-500 to-sky-600">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo y descripción */}
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logoFondea.png" alt="Logo" className="h-12" />
          </Link>
          <p className="text-white/70 text-sm">
            Empresa inscrita en el registro de la SBS
            https:/www.sbs.gob.pe/asdfghjk/sdfghjkl mediante RESOLUCION N°
            092223123123132 RUC: 201022222113123
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-white mb-1">Menu</h4>
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
              className="text-white/70 hover:text-white font-semibold text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Enlaces de interes */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-white mb-1">Enlaces de interes</h4>
          {[
            {
              label: "Politica de privacidad",
              to: "https://fonts.google.com/",
            },
            {
              label: "Terminos y condiciones",
              to: "https://fonts.googless.com/",
            },
            {
              label: "Libro de reclamaciones",
              to: "https://fonts.gooaasgle.com/",
            },
            { label: "Politica de cookies", to: "https://fonts.gswogle.com/" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white/70 hover:text-white font-semibold text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-white mb-1">Contactanos</h4>
          <p className="text-white/70 text-sm">contacto@fondea.com</p>
          <p className="text-white/70 text-sm">+51 999 999 999</p>
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-4 text-white/50 text-xs">
        © {new Date().getFullYear()} Fondea. Todos los derechos reservados.
      </div>
    </footer>
  );
}
