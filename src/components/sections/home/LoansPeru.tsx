export default function LoansPeruSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Préstamos online en Perú
          </h2>

          <div className="w-20 h-1 bg-sky-500 rounded-full mb-6"></div>

          <p className="text-slate-600 text-lg leading-relaxed">
            En <span className="font-semibold text-sky-600">Fondea</span>,
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
