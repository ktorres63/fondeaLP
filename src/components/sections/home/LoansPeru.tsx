export default function LoansPeruSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a9e0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="/prestamos-peru.webp"
            alt="Préstamos online en Perú"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

        {/* Texto */}
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
