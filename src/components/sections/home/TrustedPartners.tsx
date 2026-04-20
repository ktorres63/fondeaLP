const partners = ["/Quartzlogo.svg", "/cnbc.svg", "/Bloomberg.svg"];

export default function Partners() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Fondo tipo Levels pero más suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00a9e0] via-[#0099d5] to-[#0088cc]" />

      {/* Glow decorativo */}
      <div className="absolute -top-32 -left-32 w-75 h-75 bg-cyan-300/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-75 h-75 bg-[#0088cc]/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto text-center text-white">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nuestros colaboradores
        </h2>

        <p className="text-white/80 mb-12 max-w-2xl mx-auto">
          Trabajamos junto a aliados estratégicos que respaldan cada operación.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="
                h-14 flex items-center justify-center
                opacity-70 hover:opacity-100
                transition-all duration-300
                hover:scale-110
              "
            >
              <img
                src={logo}
                alt={`partner-${index}`}
                className="
                  h-full object-contain
                  grayscale brightness-200
                  hover:grayscale-0 hover:brightness-100
                  transition-all duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
