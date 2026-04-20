import { useState } from "react";
import { Lock, Clock, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombres: "",
    email: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombres: "", email: "", mensaje: "" });
    }, 3000);
  };

  return (
    <>
      <SEO
        title="Contacto - FONDEA | Comunícate con Nosotros"
        description="¿Necesitas ayuda? Contáctanos por WhatsApp, email o teléfono. Respuesta en menos de 24 horas. Asesoría personalizada para tu préstamo personal en Perú."
        keywords="contacto fondea, ayuda préstamos, servicio al cliente fondea, whatsapp fondea"
      />
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#00a9e0] via-[#0099d5] to-[#0088cc] text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contacto
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Column - Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                ¿Listo para acceder a mejores oportunidades financieras?
              </h2>

              <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                Dejanos tus datos y uno de nuestros asesores te ayudara a encontrar la mejor solucion para ti
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <Lock className="text-[#00a9e0] w-5 h-5" />
                  <span className="text-slate-700">Informacion segura</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-[#00a9e0] w-5 h-5" />
                  <span className="text-slate-700">Respuesta en menos de 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#00a9e0] w-5 h-5" />
                  <span className="text-slate-700">Atencion personalizada</span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">¿Necesitas ayuda?</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-700">
                    <span className="font-semibold">Email:</span> servicioalcliente@fondea.pe
                  </p>
                  <p className="text-slate-700">
                    <span className="font-semibold">Teléfono:</span> +51 999 999 999
                  </p>
                </div>

                <p className="text-slate-600 mb-4">Siguenos en:</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#00a9e0] text-slate-600 hover:text-white flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#00a9e0] text-slate-600 hover:text-white flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#00a9e0] text-slate-600 hover:text-white flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Solicita informacion
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nombres Completos
                      </label>
                      <input
                        type="text"
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a9e0] focus:ring-2 focus:ring-[#00a9e0]/20 transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Correo electronico
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a9e0] focus:ring-2 focus:ring-[#00a9e0]/20 transition-all"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a9e0] focus:ring-2 focus:ring-[#00a9e0]/20 transition-all resize-none"
                      placeholder="Escribe tu consulta aquí..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00a9e0] hover:bg-[#0099d5] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Solicitar informacion
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-slate-600">
                    Nos pondremos en contacto contigo pronto.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
    </>
  );
}
