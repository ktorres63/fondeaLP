import { Link } from "react-router";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-100 border-b border-slate-300 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-3 text-center uppercase">
            Política de Cookies
          </h1>
          <p className="text-slate-600 text-sm text-center">
            Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-slate max-w-none">

          {/* Introducción */}
          <section className="mb-10">
            <p className="mb-4 text-justify">
              La presente Política de Cookies (en adelante "la Política") regula el uso de cookies y tecnologías similares empleadas en el sitio web www.fondea.com y la aplicación móvil de FONDEA (en adelante "la Plataforma"), de titularidad de FONDEA, identificada con RUC N° 20102222211.
            </p>
            <p className="mb-4 text-justify">
              Esta Política complementa la Política de Privacidad y Protección de Datos Personales de FONDEA y debe ser leída conjuntamente con la misma. Al acceder y utilizar la Plataforma, el usuario acepta el uso de cookies conforme a los términos establecidos en este documento.
            </p>
          </section>

          {/* Artículo 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 1. DEFINICIÓN Y FUNCIÓN DE LAS COOKIES</h2>

            <h3 className="text-lg font-bold mt-5 mb-3">1.1. ¿Qué son las cookies?</h3>
            <p className="text-justify mb-3">
              Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario (computadora, tableta, teléfono móvil u otros dispositivos) al navegar por un sitio web. Las cookies permiten al sitio web reconocer el dispositivo del usuario y recordar información sobre su visita, como sus preferencias de idioma, datos de sesión, y otros parámetros que facilitan la navegación.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">1.2. Finalidad de las cookies</h3>
            <p className="text-justify mb-3">
              Las cookies tienen diversas finalidades, entre las que se incluyen: facilitar la navegación del usuario, permitir el funcionamiento técnico de la Plataforma, recordar las preferencias del usuario, analizar el tráfico y comportamiento de los usuarios, y mostrar publicidad personalizada.
            </p>
          </section>

          {/* Artículo 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 2. TIPOS DE COOKIES UTILIZADAS</h2>
            <p className="mb-4 text-justify">
              FONDEA utiliza diferentes tipos de cookies según su naturaleza, finalidad y duración:
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">2.1. Según su Finalidad</h3>

            <h4 className="font-bold mt-4 mb-2">a) Cookies Técnicas o Necesarias</h4>
            <p className="text-justify mb-3 ml-4">
              Son esenciales para el funcionamiento de la Plataforma y permiten al usuario navegar y utilizar sus funciones básicas. Estas cookies gestionan el control de flujo de datos, identifican la sesión, permiten el acceso a áreas restringidas, y recuerdan elementos de un pedido. Sin estas cookies, la Plataforma no puede funcionar correctamente.
            </p>
            <p className="text-justify mb-3 ml-4 text-sm italic">
              Ejemplos: cookies de sesión, cookies de autenticación, cookies de seguridad.
            </p>

            <h4 className="font-bold mt-4 mb-2">b) Cookies de Personalización o Funcionales</h4>
            <p className="text-justify mb-3 ml-4">
              Permiten recordar las preferencias del usuario para ofrecer una experiencia personalizada, como el idioma seleccionado, la región o zona geográfica, el tipo de navegador, y la configuración de la interfaz. Estas cookies mejoran la funcionalidad y personalización de la Plataforma.
            </p>

            <h4 className="font-bold mt-4 mb-2">c) Cookies Analíticas o de Medición</h4>
            <p className="text-justify mb-3 ml-4">
              Recopilan información sobre cómo los usuarios utilizan la Plataforma, incluyendo las páginas visitadas, el tiempo de permanencia, los enlaces en los que hacen clic, y los mensajes de error que reciben. Esta información se utiliza de forma agregada y anónima para mejorar el rendimiento de la Plataforma y comprender el comportamiento de los usuarios.
            </p>
            <p className="text-justify mb-3 ml-4 text-sm italic">
              Ejemplos: Google Analytics, Hotjar, Mixpanel.
            </p>

            <h4 className="font-bold mt-4 mb-2">d) Cookies Publicitarias o de Marketing</h4>
            <p className="text-justify mb-3 ml-4">
              Se utilizan para mostrar publicidad relevante al usuario en función de sus intereses, hábitos de navegación e historial de búsqueda. También permiten medir la eficacia de las campañas publicitarias y limitar el número de veces que el usuario ve un anuncio.
            </p>
            <p className="text-justify mb-3 ml-4 text-sm italic">
              Ejemplos: Google Ads, Meta Pixel (Facebook/Instagram), LinkedIn Insight Tag.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">2.2. Según su Titularidad</h3>

            <h4 className="font-bold mt-4 mb-2">a) Cookies Propias</h4>
            <p className="text-justify mb-3 ml-4">
              Son aquellas enviadas al dispositivo del usuario desde equipos o dominios gestionados directamente por FONDEA.
            </p>

            <h4 className="font-bold mt-4 mb-2">b) Cookies de Terceros</h4>
            <p className="text-justify mb-3 ml-4">
              Son aquellas enviadas al dispositivo del usuario desde equipos o dominios que no son gestionados por FONDEA, sino por otra entidad que trata los datos obtenidos a través de las cookies. Las principales entidades terceras que instalan cookies en la Plataforma son Google LLC, Meta Platforms Inc., y proveedores de servicios analíticos.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">2.3. Según su Duración</h3>

            <h4 className="font-bold mt-4 mb-2">a) Cookies de Sesión</h4>
            <p className="text-justify mb-3 ml-4">
              Se eliminan automáticamente cuando el usuario cierra el navegador. Se utilizan para mantener la sesión activa durante la navegación.
            </p>

            <h4 className="font-bold mt-4 mb-2">b) Cookies Persistentes</h4>
            <p className="text-justify mb-3 ml-4">
              Permanecen almacenadas en el dispositivo del usuario durante un período determinado, que puede variar desde unos minutos hasta varios años. Se utilizan para recordar las preferencias del usuario en futuras visitas.
            </p>
          </section>

          {/* Artículo 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 3. COOKIES ESPECÍFICAS UTILIZADAS</h2>
            <p className="mb-4 text-justify">
              A continuación, se detalla la información específica sobre las cookies utilizadas en la Plataforma:
            </p>

            <div className="overflow-x-auto border border-slate-300">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 border-b border-slate-300">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Nombre</th>
                    <th className="px-4 py-3 text-left font-bold">Proveedor</th>
                    <th className="px-4 py-3 text-left font-bold">Tipo</th>
                    <th className="px-4 py-3 text-left font-bold">Finalidad</th>
                    <th className="px-4 py-3 text-left font-bold">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">session_id</td>
                    <td className="px-4 py-3">FONDEA</td>
                    <td className="px-4 py-3">Técnica</td>
                    <td className="px-4 py-3">Identificar sesión de usuario</td>
                    <td className="px-4 py-3">Sesión</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">user_pref</td>
                    <td className="px-4 py-3">FONDEA</td>
                    <td className="px-4 py-3">Funcional</td>
                    <td className="px-4 py-3">Guardar preferencias de usuario</td>
                    <td className="px-4 py-3">1 año</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_ga</td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">Analítica</td>
                    <td className="px-4 py-3">Distinguir usuarios únicos</td>
                    <td className="px-4 py-3">2 años</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_gid</td>
                    <td className="px-4 py-3">Google Analytics</td>
                    <td className="px-4 py-3">Analítica</td>
                    <td className="px-4 py-3">Distinguir usuarios únicos</td>
                    <td className="px-4 py-3">24 horas</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_fbp</td>
                    <td className="px-4 py-3">Meta Pixel</td>
                    <td className="px-4 py-3">Publicitaria</td>
                    <td className="px-4 py-3">Rastrear conversiones y remarketing</td>
                    <td className="px-4 py-3">3 meses</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_hjid</td>
                    <td className="px-4 py-3">Hotjar</td>
                    <td className="px-4 py-3">Analítica</td>
                    <td className="px-4 py-3">Identificar sesión para análisis UX</td>
                    <td className="px-4 py-3">1 año</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">cookie_consent</td>
                    <td className="px-4 py-3">FONDEA</td>
                    <td className="px-4 py-3">Técnica</td>
                    <td className="px-4 py-3">Guardar preferencias de cookies</td>
                    <td className="px-4 py-3">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Artículo 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 4. BASE LEGAL PARA EL TRATAMIENTO</h2>
            <p className="text-justify mb-3">
              El tratamiento de datos personales mediante cookies se realiza sobre las siguientes bases legales:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li className="text-justify">
                <strong>Consentimiento del usuario:</strong> Para cookies analíticas y publicitarias, solicitamos el consentimiento expreso del usuario a través del banner de cookies al ingresar a la Plataforma.
              </li>
              <li className="text-justify">
                <strong>Interés legítimo:</strong> Para cookies técnicas y funcionales estrictamente necesarias para la prestación del servicio solicitado por el usuario.
              </li>
              <li className="text-justify">
                <strong>Ejecución de contrato:</strong> Para cookies necesarias para la gestión de la relación contractual entre FONDEA y el usuario.
              </li>
            </ul>
          </section>

          {/* Artículo 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 5. GESTIÓN DE COOKIES</h2>

            <h3 className="text-lg font-bold mt-5 mb-3">5.1. Panel de Configuración de Cookies</h3>
            <p className="text-justify mb-3">
              Al ingresar a la Plataforma por primera vez, el usuario visualizará un banner informativo sobre el uso de cookies. El usuario puede aceptar todas las cookies, rechazar las cookies opcionales, o acceder al panel de configuración para gestionar sus preferencias de manera granular.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">5.2. Configuración del Navegador</h3>
            <p className="text-justify mb-3">
              El usuario puede bloquear, desactivar o eliminar las cookies instaladas en su dispositivo mediante la configuración de su navegador web. A continuación, se indican los enlaces a la sección de ayuda de los navegadores más utilizados:
            </p>
            <ul className="list-disc ml-8 space-y-1 text-sm">
              <li><strong>Google Chrome:</strong> chrome://settings/cookies</li>
              <li><strong>Mozilla Firefox:</strong> Preferencias &gt; Privacidad y Seguridad</li>
              <li><strong>Safari:</strong> Preferencias &gt; Privacidad</li>
              <li><strong>Microsoft Edge:</strong> Configuración &gt; Privacidad, búsqueda y servicios</li>
              <li><strong>Opera:</strong> Configuración &gt; Privacidad y seguridad</li>
            </ul>

            <h3 className="text-lg font-bold mt-5 mb-3">5.3. Consecuencias de Desactivar las Cookies</h3>
            <p className="text-justify mb-3">
              La desactivación de cookies técnicas o necesarias puede afectar el funcionamiento correcto de la Plataforma e impedir el acceso a determinadas funcionalidades. La desactivación de cookies analíticas o publicitarias no afectará la navegación, pero FONDEA no podrá ofrecer una experiencia personalizada ni medir la efectividad de sus servicios.
            </p>
          </section>

          {/* Artículo 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 6. COOKIES DE TERCEROS</h2>
            <p className="text-justify mb-3">
              FONDEA utiliza servicios de terceros que instalan cookies en la Plataforma. Estos terceros tienen sus propias políticas de privacidad y cookies, sobre las cuales FONDEA no tiene control. A continuación, se detallan los principales terceros y enlaces a sus políticas:
            </p>
            <ul className="list-disc ml-8 space-y-2 text-sm">
              <li>
                <strong>Google Analytics:</strong> Análisis de tráfico web.
                <br />Política: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://policies.google.com/privacy</a>
              </li>
              <li>
                <strong>Meta Pixel (Facebook):</strong> Publicidad y remarketing.
                <br />Política: <a href="https://www.facebook.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.facebook.com/privacy</a>
              </li>
              <li>
                <strong>Hotjar:</strong> Análisis de experiencia de usuario.
                <br />Política: <a href="https://www.hotjar.com/legal/policies/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.hotjar.com/legal/policies/privacy</a>
              </li>
            </ul>
          </section>

          {/* Artículo 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 7. ACTUALIZACIONES DE LA POLÍTICA</h2>
            <p className="text-justify mb-3">
              FONDEA se reserva el derecho de modificar la presente Política en cualquier momento para adaptarla a cambios normativos, tecnológicos o a nuevas prácticas empresariales. Las modificaciones serán notificadas a los usuarios mediante aviso en la Plataforma con una antelación mínima de quince (15) días calendario. El uso continuado de la Plataforma tras la notificación de cambios constituirá la aceptación de la Política modificada.
            </p>
          </section>

          {/* Artículo 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 8. INFORMACIÓN DE CONTACTO</h2>
            <p className="text-justify mb-3">
              Para consultas o solicitudes relacionadas con el uso de cookies, el usuario puede contactarse con FONDEA a través de:
            </p>
            <div className="ml-6 mt-4">
              <p><strong>Razón Social:</strong> FONDEA</p>
              <p><strong>RUC:</strong> 20102222211</p>
              <p><strong>Domicilio Legal:</strong> Lima, Perú</p>
              <p><strong>Correo Electrónico:</strong> privacidad@fondea.com</p>
              <p><strong>Teléfono:</strong> +51 999 999 999</p>
            </div>
          </section>

          {/* Artículo 9 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 9. LEY APLICABLE</h2>
            <p className="text-justify">
              La presente Política se rige por las leyes de la República del Perú, en particular por la Ley N° 29733, Ley de Protección de Datos Personales, y su Reglamento.
            </p>
          </section>

          {/* Documentos relacionados */}
          <section className="mb-8 bg-slate-50 p-6 border-l-4 border-slate-400">
            <h3 className="font-bold text-slate-900 mb-3">DOCUMENTOS RELACIONADOS</h3>
            <p className="text-sm mb-3">Esta Política debe leerse conjuntamente con:</p>
            <ul className="space-y-2">
              <li>
                <Link to="/politica-privacidad" className="text-blue-600 underline">
                  Política de Privacidad y Protección de Datos Personales
                </Link>
              </li>
              <li>
                <Link to="/terminos-condiciones" className="text-blue-600 underline">
                  Términos y Condiciones Generales de Contratación
                </Link>
              </li>
            </ul>
          </section>

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
      </article>
    </div>
  );
}
