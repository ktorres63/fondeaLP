export default function LoansPeruSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a9e0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Imagen con texto superpuesto */}
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg max-w-md w-full">
            {/* Imagen */}
            <img
              src="/prestamos-peru.webp"
              alt="Préstamos online en Perú"
              className="w-full h-auto object-cover"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Texto superpuesto */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {/* Badge */}
              <div className="mb-3">
                <span className="inline-block bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                  💰 Préstamos Perú
                </span>
              </div>

              {/* Título */}
              <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                Préstamos online en Perú
              </h2>

              {/* CTA Button */}
              <div>
                <button className="inline-flex items-center gap-2 bg-[#c3f934] hover:bg-[#b3e824] text-black text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:scale-105 shadow-lg">
                  Descubre más →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Texto a la derecha */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00a9e0] mb-6">
            Préstamos online en Perú
          </h2>

          <div className="w-20 h-1 bg-[#c3f934] rounded-full mb-6"></div>

          <p className="text-slate-600 text-lg leading-relaxed">
            En <span className="font-bold text-[#00a9e0]">Fondea</span>,
            hacemos que obtener un préstamo en el Perú sea rápido y sencillo.
            Disfruta de tasas competitivas, sin papeleo innecesario y con
            desembolsos directos a tu cuenta bancaria en minutos, todo desde la
            comodidad de tu celular.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed mt-4">
            Nuestra tecnología segura y transparente te permite acceder a
            financiamiento cuando lo necesitas, sin aval ni garantías complejas.
            ¡Únete a los miles de peruanos que confían en nosotros para sus
            necesidades financieras!
          </p>
        </div>
      </div>
    </section>
  );
}
