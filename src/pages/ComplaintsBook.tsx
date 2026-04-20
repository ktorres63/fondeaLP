import { useState } from "react";
import { Link } from "react-router";

export default function ComplaintsBookPage() {
  const [formData, setFormData] = useState({
    tipoDocumento: "DNI",
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    departamento: "",
    tipoReclamo: "RECLAMO",
    tipoProducto: "PRESTAMO",
    monto: "",
    detalle: "",
    pedido: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      setFormData({
        tipoDocumento: "DNI",
        numeroDocumento: "",
        nombres: "",
        apellidos: "",
        email: "",
        telefono: "",
        direccion: "",
        departamento: "",
        tipoReclamo: "RECLAMO",
        tipoProducto: "PRESTAMO",
        monto: "",
        detalle: "",
        pedido: "",
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-100 border-b border-slate-300 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-3 text-center uppercase">
            Libro de Reclamaciones
          </h1>
          <p className="text-slate-600 text-sm text-center">
            Conforme al Código de Protección y Defensa del Consumidor - Ley N° 29571
          </p>
        </div>
      </section>

      {/* Info Legal */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-b">
        <div className="prose prose-slate max-w-none">
          <p className="text-justify mb-4">
            De conformidad con lo establecido en el artículo 150 del Código de Protección y Defensa del Consumidor (Ley N° 29571) y su Reglamento aprobado por Decreto Supremo N° 011-2011-PCM, FONDEA pone a disposición de sus clientes y usuarios el presente Libro de Reclamaciones en formato virtual.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border-l-4 border-slate-400 pl-4">
              <h3 className="font-bold text-slate-900 mb-2">RECLAMO</h3>
              <p className="text-sm text-slate-700">
                Disconformidad relacionada con los productos o servicios prestados por el proveedor.
              </p>
            </div>
            <div className="border-l-4 border-slate-400 pl-4">
              <h3 className="font-bold text-slate-900 mb-2">QUEJA</h3>
              <p className="text-sm text-slate-700">
                Disconformidad no relacionada directamente con los productos o servicios, sino con la atención al público.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-4 border-l-4 border-slate-400 my-6">
            <h3 className="font-bold text-slate-900 mb-2">DISPOSICIONES IMPORTANTES</h3>
            <ul className="text-sm text-slate-700 space-y-1 list-disc ml-5">
              <li>La atención del reclamo o queja es totalmente GRATUITA.</li>
              <li>El plazo máximo de respuesta es de TREINTA (30) días calendario.</li>
              <li>La formulación del reclamo o queja no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante INDECOPI.</li>
              <li>El proveedor debe mantener el Libro de Reclamaciones en un lugar visible y accesible.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Sección 1 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-300">
                1. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tipo de Documento <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="tipoDocumento"
                    value={formData.tipoDocumento}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  >
                    <option value="DNI">DNI</option>
                    <option value="CE">Carnet de Extranjería</option>
                    <option value="PASAPORTE">Pasaporte</option>
                    <option value="RUC">RUC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Número de Documento <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="numeroDocumento"
                    value={formData.numeroDocumento}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombres <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Apellidos <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Correo Electrónico <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Teléfono <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Dirección <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Departamento <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  />
                </div>
              </div>
            </div>

            {/* Sección 2 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-300">
                2. IDENTIFICACIÓN DEL BIEN CONTRATADO
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tipo de Solicitud <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="tipoReclamo"
                    value={formData.tipoReclamo}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  >
                    <option value="RECLAMO">RECLAMO</option>
                    <option value="QUEJA">QUEJA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Producto/Servicio <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="tipoProducto"
                    value={formData.tipoProducto}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  >
                    <option value="PRESTAMO">Préstamo Personal</option>
                    <option value="PLATAFORMA">Plataforma Web</option>
                    <option value="ATENCION">Atención al Cliente</option>
                    <option value="OTRO">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Monto Reclamado (S/)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="monto"
                    value={formData.monto}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
                  />
                </div>
              </div>
            </div>

            {/* Sección 3 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-300">
                3. DETALLE DE LA RECLAMACIÓN O QUEJA Y PEDIDO DEL CONSUMIDOR
              </h2>

              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Descripción detallada de los hechos <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="detalle"
                    value={formData.detalle}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500 resize-none"
                    placeholder="Detalle los hechos que motivan su reclamo o queja..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pedido del consumidor <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="pedido"
                    value={formData.pedido}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500 resize-none"
                    placeholder="Indique la solución que espera..."
                  />
                </div>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="bg-slate-50 p-4 border-l-4 border-slate-400 text-sm text-slate-700">
              <p className="mb-2">
                * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.
              </p>
              <p>
                * El proveedor deberá dar respuesta al reclamo en un plazo no mayor a treinta (30) días calendario, pudiendo ampliar el plazo hasta por treinta (30) días más, previa comunicación al consumidor.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded transition-colors"
              >
                REGISTRAR RECLAMO
              </button>
            </div>

            <p className="text-xs text-slate-500 text-center">
              Al enviar este formulario, acepto que mis datos sean procesados según la{" "}
              <Link to="/politica-privacidad" className="text-blue-600 underline">
                Política de Privacidad
              </Link>
            </p>
          </form>
        ) : (
          <div className="text-center py-12 border-2 border-slate-300">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              RECLAMO REGISTRADO EXITOSAMENTE
            </h2>
            <p className="text-slate-700 mb-6 max-w-md mx-auto">
              Su reclamo ha sido registrado con el siguiente código de seguimiento:
            </p>
            <p className="text-xl font-bold text-slate-900 mb-6">
              REC-{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
            </p>
            <p className="text-sm text-slate-600 mb-2">
              Recibirá una copia de este registro en su correo electrónico.
            </p>
            <p className="text-sm text-slate-600">
              Plazo de respuesta: Máximo 30 días calendario.
            </p>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 pt-8 border-t">
          <div>
            <h3 className="font-bold text-slate-900 mb-3">DATOS DEL PROVEEDOR</h3>
            <div className="text-sm text-slate-700 space-y-1">
              <p><strong>Razón Social:</strong> FONDEA</p>
              <p><strong>RUC:</strong> 20102222211</p>
              <p><strong>Domicilio:</strong> Lima, Perú</p>
              <p><strong>Teléfono:</strong> +51 999 999 999</p>
              <p><strong>Email:</strong> reclamos@fondea.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3">AUTORIDAD COMPETENTE</h3>
            <p className="text-sm text-slate-700 mb-2">
              Si no está conforme con la respuesta, puede acudir a:
            </p>
            <div className="text-sm text-slate-700 space-y-1">
              <p><strong>INDECOPI</strong></p>
              <p>Web: www.indecopi.gob.pe</p>
              <p>Teléfono: 224-7777 (Lima)</p>
              <p>Línea gratuita: 0-800-4-4040</p>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-12 text-center border-t pt-8">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </div>
  );
}
