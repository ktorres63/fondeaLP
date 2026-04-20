import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white mt-auto overflow-hidden">
      {/* Background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00a9e0] via-[#0099d5] to-[#0088cc]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-300/5 rounded-full blur-3xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern-white opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {/* Logo y descripción */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logoFondea.png" alt="Fondea Logo" className="h-12 transition-transform group-hover:scale-105" />
          </Link>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs">
            Financiamiento rápido, seguro y transparente para alcanzar tus metas.
          </p>
          <p className="text-white/60 text-xs leading-relaxed max-w-xs">
            Empresa inscrita en el registro de la SBS mediante RESOLUCIÓN N° 092223123123132
          </p>
          <p className="text-white/60 text-xs">RUC: 20102222211</p>

          {/* Social Media */}
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c3f934] border border-white/20 hover:border-[#c3f934] flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label="Facebook">
              <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c3f934] border border-white/20 hover:border-[#c3f934] flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label="Instagram">
              <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c3f934] border border-white/20 hover:border-[#c3f934] flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label="LinkedIn">
              <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c3f934] border border-white/20 hover:border-[#c3f934] flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label="Twitter">
              <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-white mb-2 text-lg">Navegación</h4>
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
              className="text-white/80 hover:text-[#c3f934] hover:translate-x-1 font-medium text-sm transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="w-0 group-hover:w-2 h-0.5 bg-[#c3f934] transition-all duration-300" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Enlaces de interes */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-white mb-2 text-lg">Legal</h4>
          {[
            {
              label: "Política de privacidad",
              to: "/politica-privacidad",
            },
            {
              label: "Términos y condiciones",
              to: "/terminos-condiciones",
            },
            {
              label: "Libro de reclamaciones",
              to: "/libro-reclamaciones",
            },
            { label: "Política de cookies", to: "/politica-cookies" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white/80 hover:text-[#c3f934] hover:translate-x-1 font-medium text-sm transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="w-0 group-hover:w-2 h-0.5 bg-[#c3f934] transition-all duration-300" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-white mb-2 text-lg">Contáctanos</h4>

          <div className="flex items-start gap-3 group cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c3f934] transition-all duration-300">
              <Mail size={16} className="text-white group-hover:text-black transition-colors" />
            </div>
            <div>
              <p className="text-white/60 text-xs mb-0.5">Email</p>
              <a href="mailto:contacto@fondea.com" className="text-white/90 hover:text-[#c3f934] text-sm font-medium transition-colors">
                contacto@fondea.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 group cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c3f934] transition-all duration-300">
              <Phone size={16} className="text-white group-hover:text-black transition-colors" />
            </div>
            <div>
              <p className="text-white/60 text-xs mb-0.5">Teléfono</p>
              <a href="tel:+51999999999" className="text-white/90 hover:text-[#c3f934] text-sm font-medium transition-colors">
                +51 999 999 999
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c3f934] transition-all duration-300">
              <MapPin size={16} className="text-white group-hover:text-black transition-colors" />
            </div>
            <div>
              <p className="text-white/60 text-xs mb-0.5">Oficina</p>
              <p className="text-white/90 text-sm font-medium">
                Lima, Perú
              </p>
            </div>
          </div>
        </div>

        {/* Phone mockup - quinta columna */}
        <div className="hidden xl:flex flex-col items-center justify-center">
          <div className="relative">
            {/* Placeholder para imagen del celular */}
            <img
              src="/phone-mockup.png"
              alt="App Fondea"
              className="w-48 h-auto drop-shadow-2xl"
              onError={(e) => {
                // Fallback si no existe la imagen
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                }
              }}
            />
            {/* Fallback placeholder */}
            <div className="hidden w-48 h-96 bg-white/10 backdrop-blur-sm rounded-3xl border-4 border-white/20 items-center justify-center p-4">
              <div className="text-center">
                <div className="text-white/60 text-xs mb-2">Imagen del celular</div>
                <div className="text-white/40 text-[10px]">phone-mockup.png</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-bold text-white">Fondea</span>. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/60">
            <Link to="/terminos" className="hover:text-[#c3f934] transition-colors">Términos</Link>
            <Link to="/privacidad" className="hover:text-[#c3f934] transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-[#c3f934] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
