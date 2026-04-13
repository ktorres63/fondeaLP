import { Zap, ShieldCheck, Wallet } from "lucide-react";
import { Link } from "react-router";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
            ¿Por qué elegirnos?
          </h2>

          <p className="text-sky-800 text-lg mb-6 max-w-md">
            Te acompañamos con procesos claros y opciones pensadas para ti.
          </p>

          <Link
            to="/solicitar"
            className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded-2xl transition-colors"
          >
            Solicita tu préstamo
          </Link>
        </div>
      </div>
    </section>
  );
}
