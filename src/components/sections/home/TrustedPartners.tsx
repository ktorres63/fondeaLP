const partners = ["/partner1.svg", "/partner2.svg", "/partner3.svg"];

export default function Partners() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Nuestros Colaboradores
        </h2>

        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Trabajamos junto a aliados estratégicos que respaldan cada operación.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo}
                alt={`partner-${index}`}
                className="h-full object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
