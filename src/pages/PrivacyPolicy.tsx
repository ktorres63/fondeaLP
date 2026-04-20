import { Link } from "react-router";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-100 border-b border-slate-300 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-3 text-center uppercase">
            Política de Privacidad y Protección de Datos Personales
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
              FONDEA, identificada con Registro Único de Contribuyentes (RUC) N° 20102222211, inscrita en la Superintendencia de Banca, Seguros y AFP (SBS) mediante Resolución N° 092223123123132, con domicilio legal en Lima, Perú (en adelante "FONDEA", "nosotros", "nuestro" o "la Empresa"), en su calidad de titular del banco de datos personales, informa a sus clientes, usuarios y visitantes del sitio web www.fondea.com (en adelante "la Plataforma") sobre el tratamiento de sus datos personales.
            </p>
            <p className="mb-4 text-justify">
              La presente Política de Privacidad y Protección de Datos Personales (en adelante "la Política") se ha elaborado en cumplimiento de la Ley N° 29733, Ley de Protección de Datos Personales del Perú (en adelante "la Ley"), su Reglamento aprobado por Decreto Supremo N° 003-2013-JUS, y las Directivas emitidas por la Autoridad Nacional de Protección de Datos Personales.
            </p>
          </section>

          {/* Artículo 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 1. DEFINICIONES</h2>
            <p className="mb-3 text-justify">Para efectos de la presente Política, se entenderá por:</p>
            <dl className="ml-6 space-y-3">
              <div>
                <dt className="font-bold">Datos Personales:</dt>
                <dd className="ml-4 text-justify">Toda información sobre una persona natural que la identifica o la hace identificable a través de medios que pueden ser razonablemente utilizados.</dd>
              </div>
              <div>
                <dt className="font-bold">Titular:</dt>
                <dd className="ml-4 text-justify">Persona natural a quien corresponden los datos personales.</dd>
              </div>
              <div>
                <dt className="font-bold">Tratamiento:</dt>
                <dd className="ml-4 text-justify">Cualquier operación o procedimiento técnico, automatizado o no, que permite la recopilación, registro, organización, almacenamiento, conservación, elaboración, modificación, extracción, consulta, utilización, bloqueo, supresión, comunicación por transferencia o por difusión o cualquier otra forma de procesamiento que facilite el acceso, correlación o interconexión de los datos personales.</dd>
              </div>
              <div>
                <dt className="font-bold">Banco de Datos Personales:</dt>
                <dd className="ml-4 text-justify">Conjunto organizado de datos personales, automatizado o no, independientemente del soporte, sea este físico, magnético, digital, óptico u otros que se creen, cualquiera fuere la forma o modalidad de su creación, formación, almacenamiento, organización y acceso.</dd>
              </div>
            </dl>
          </section>

          {/* Artículo 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 2. DATOS PERSONALES RECOPILADOS</h2>
            <p className="mb-3 text-justify">FONDEA recopila y trata las siguientes categorías de datos personales:</p>

            <h3 className="text-lg font-bold mt-5 mb-3">2.1. Datos de Identificación</h3>
            <ul className="list-disc ml-8 space-y-1">
              <li>Nombres y apellidos completos</li>
              <li>Número de Documento Nacional de Identidad (DNI) o documento de identidad equivalente</li>
              <li>Fecha y lugar de nacimiento</li>
              <li>Nacionalidad</li>
              <li>Estado civil</li>
              <li>Sexo</li>
            </ul>

            <h3 className="text-lg font-bold mt-5 mb-3">2.2. Datos de Contacto</h3>
            <ul className="list-disc ml-8 space-y-1">
              <li>Domicilio actual (dirección completa, distrito, provincia, departamento)</li>
              <li>Números telefónicos (fijo y/o móvil)</li>
              <li>Correo electrónico</li>
            </ul>

            <h3 className="text-lg font-bold mt-5 mb-3">2.3. Datos Laborales y Económicos</h3>
            <ul className="list-disc ml-8 space-y-1">
              <li>Ocupación y actividad económica</li>
              <li>Información sobre ingresos mensuales</li>
              <li>Datos del empleador (nombre, RUC, dirección)</li>
              <li>Antigüedad laboral</li>
            </ul>

            <h3 className="text-lg font-bold mt-5 mb-3">2.4. Datos Financieros</h3>
            <ul className="list-disc ml-8 space-y-1">
              <li>Información de cuentas bancarias (número de cuenta, CCI, banco)</li>
              <li>Historial crediticio y score crediticio</li>
              <li>Información sobre deudas y obligaciones financieras</li>
              <li>Comportamiento de pago</li>
            </ul>

            <h3 className="text-lg font-bold mt-5 mb-3">2.5. Datos de Navegación y Uso</h3>
            <ul className="list-disc ml-8 space-y-1">
              <li>Dirección IP</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Sistema operativo</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Cookies y tecnologías similares</li>
            </ul>
          </section>

          {/* Artículo 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 3. FINALIDAD DEL TRATAMIENTO</h2>
            <p className="mb-3 text-justify">Los datos personales recopilados serán tratados para las siguientes finalidades específicas, explícitas y lícitas:</p>

            <h3 className="text-lg font-bold mt-5 mb-3">3.1. Finalidades Principales</h3>
            <ol className="list-decimal ml-8 space-y-2">
              <li className="text-justify">Evaluar la capacidad crediticia del solicitante mediante el análisis de su perfil financiero y comportamiento de pago.</li>
              <li className="text-justify">Procesar solicitudes de préstamos personales, incluyendo la aprobación, desembolso, cobranza y gestión de pagos.</li>
              <li className="text-justify">Verificar la identidad del titular y prevenir el fraude, el lavado de activos y el financiamiento del terrorismo, en cumplimiento de la normativa vigente.</li>
              <li className="text-justify">Gestionar la relación contractual entre FONDEA y el titular, incluyendo la emisión de contratos, cronogramas de pago y estados de cuenta.</li>
              <li className="text-justify">Realizar gestiones de cobranza, incluyendo recordatorios de pago, notificaciones de vencimiento y acciones de recuperación de cartera morosa.</li>
            </ol>

            <h3 className="text-lg font-bold mt-5 mb-3">3.2. Finalidades Secundarias</h3>
            <ol className="list-decimal ml-8 space-y-2">
              <li className="text-justify">Enviar comunicaciones comerciales sobre productos, servicios, promociones y beneficios de FONDEA.</li>
              <li className="text-justify">Realizar estudios estadísticos, de mercado y análisis de comportamiento del consumidor.</li>
              <li className="text-justify">Mejorar la calidad de nuestros servicios y la experiencia del usuario en la Plataforma.</li>
              <li className="text-justify">Cumplir con obligaciones legales, incluyendo reportes a la SBS, SUNAT y otras autoridades competentes.</li>
            </ol>

            <p className="mt-4 text-justify">
              El titular puede oponerse al tratamiento de sus datos para finalidades secundarias comunicándolo a través de los canales indicados en el Artículo 11 de la presente Política.
            </p>
          </section>

          {/* Artículo 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 4. PLAZO DE CONSERVACIÓN</h2>
            <p className="mb-3 text-justify">
              Los datos personales serán conservados durante el plazo necesario para cumplir con las finalidades para las cuales fueron recopilados y de acuerdo con las obligaciones legales aplicables. En particular:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li className="text-justify">Mientras exista una relación contractual vigente entre el titular y FONDEA.</li>
              <li className="text-justify">Durante el plazo establecido por la normativa de la SBS para la conservación de documentación bancaria y financiera, que es de cinco (5) años contados desde la finalización de la relación contractual.</li>
              <li className="text-justify">Por el tiempo que sea necesario para atender requerimientos legales, judiciales o administrativos.</li>
            </ul>
            <p className="mt-4 text-justify">
              Transcurridos estos plazos, los datos personales serán eliminados o anonimizados de manera que no permitan la identificación del titular.
            </p>
          </section>

          {/* Artículo 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 5. TRANSFERENCIA DE DATOS PERSONALES</h2>
            <p className="mb-3 text-justify">
              FONDEA podrá transferir los datos personales de sus titulares a terceros, nacionales o extranjeros, en los siguientes casos:
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">5.1. Transferencia Nacional</h3>
            <ul className="list-disc ml-8 space-y-2">
              <li className="text-justify"><strong>Centrales de Riesgo:</strong> Para consultar y reportar el historial crediticio del titular (Equifax Perú S.A.C., CERTICOM S.A.C., Sentinel Perú S.A., Infocorp S.A.).</li>
              <li className="text-justify"><strong>Entidades Financieras:</strong> Para el procesamiento de desembolsos y pagos a través de transferencias bancarias.</li>
              <li className="text-justify"><strong>Proveedores de Servicios:</strong> Para verificación de identidad, validación de datos, prevención de fraude, servicios de almacenamiento en la nube y servicios de contact center.</li>
              <li className="text-justify"><strong>Empresas de Cobranza:</strong> Para la gestión de cartera morosa, debidamente autorizadas conforme a la normativa vigente.</li>
              <li className="text-justify"><strong>Autoridades Competentes:</strong> Cuando sea requerido por mandato legal o resolución judicial (SBS, SUNAT, Poder Judicial, Ministerio Público, UIF-Perú).</li>
            </ul>

            <h3 className="text-lg font-bold mt-5 mb-3">5.2. Transferencia Internacional</h3>
            <p className="text-justify mb-3">
              FONDEA podrá transferir datos personales a servidores ubicados en el extranjero, únicamente a países que cuenten con niveles adecuados de protección de datos personales o cuando el titular haya prestado su consentimiento expreso para dicha transferencia. En caso de transferencias internacionales, FONDEA adoptará las medidas necesarias para garantizar la protección de los datos personales conforme a la Ley y su Reglamento.
            </p>
          </section>

          {/* Artículo 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 6. MEDIDAS DE SEGURIDAD</h2>
            <p className="mb-3 text-justify">
              FONDEA ha adoptado las medidas técnicas, organizativas y legales necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a los que están expuestos. Entre las medidas implementadas se encuentran:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li className="text-justify">Encriptación de datos mediante protocolos SSL/TLS en todas las comunicaciones.</li>
              <li className="text-justify">Almacenamiento de datos en servidores seguros con certificación ISO 27001.</li>
              <li className="text-justify">Control de acceso mediante autenticación de usuarios y perfiles de autorización.</li>
              <li className="text-justify">Políticas internas de seguridad de la información y capacitación del personal.</li>
              <li className="text-justify">Auditorías periódicas de seguridad y pruebas de penetración.</li>
              <li className="text-justify">Plan de respuesta ante incidentes de seguridad.</li>
            </ul>
            <p className="mt-4 text-justify">
              No obstante, el titular reconoce que ningún sistema de seguridad es infalible y que FONDEA no puede garantizar la seguridad absoluta de los datos personales.
            </p>
          </section>

          {/* Artículo 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 7. DERECHOS DEL TITULAR</h2>
            <p className="mb-3 text-justify">
              En cumplimiento de los artículos 18 y siguientes de la Ley, el titular tiene los siguientes derechos respecto de sus datos personales:
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">7.1. Derecho de Información</h3>
            <p className="text-justify mb-3">
              El titular tiene derecho a ser informado de manera detallada sobre el tratamiento que se está dando a sus datos personales, incluyendo la identidad y domicilio del responsable, las finalidades del tratamiento, los destinatarios de la información y el plazo de conservación.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">7.2. Derecho de Acceso</h3>
            <p className="text-justify mb-3">
              El titular tiene derecho a obtener información sobre sus datos personales que se encuentran en el banco de datos de FONDEA, así como sobre el tratamiento que se les está dando.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">7.3. Derecho de Rectificación, Actualización e Inclusión</h3>
            <p className="text-justify mb-3">
              El titular tiene derecho a solicitar la actualización, inclusión o rectificación de sus datos personales cuando estos sean parciales, inexactos, incompletos, fraccionados, induzcan a error o cuando su tratamiento no esté permitido.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">7.4. Derecho de Cancelación o Supresión</h3>
            <p className="text-justify mb-3">
              El titular tiene derecho a solicitar la supresión o cancelación de sus datos personales cuando considere que no se está respetando alguno de los principios de la Ley. Este derecho está sujeto a las limitaciones establecidas en la normativa vigente, particularmente cuando exista una obligación legal de conservar los datos.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">7.5. Derecho de Oposición</h3>
            <p className="text-justify mb-3">
              El titular tiene derecho a oponerse al tratamiento de sus datos personales para finalidades secundarias, siempre que no exista una obligación legal de continuar con dicho tratamiento.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">7.6. Derecho a la Seguridad de los Datos</h3>
            <p className="text-justify mb-3">
              El titular tiene derecho a que sus datos personales sean tratados con las medidas de seguridad correspondientes para evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">7.7. Revocación del Consentimiento</h3>
            <p className="text-justify mb-3">
              El titular tiene derecho a revocar su consentimiento para el tratamiento de datos personales en cualquier momento, sin que esto afecte la licitud del tratamiento realizado con anterioridad a la revocación.
            </p>
          </section>

          {/* Artículo 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 8. PROCEDIMIENTO PARA EL EJERCICIO DE DERECHOS</h2>
            <p className="mb-3 text-justify">
              Para ejercer los derechos señalados en el Artículo 7, el titular deberá presentar una solicitud por escrito dirigida a FONDEA, cumpliendo con los siguientes requisitos:
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">8.1. Requisitos de la Solicitud</h3>
            <ul className="list-disc ml-8 space-y-2">
              <li>Nombres y apellidos completos del titular.</li>
              <li>Número de DNI o documento de identidad equivalente.</li>
              <li>Domicilio o medio de contacto para recibir la respuesta.</li>
              <li>Descripción clara y precisa del derecho que se desea ejercer.</li>
              <li>Documentos que sustentan la solicitud, de ser el caso.</li>
              <li>Firma del titular o de su representante legal debidamente acreditado.</li>
            </ul>

            <h3 className="text-lg font-bold mt-5 mb-3">8.2. Canales de Atención</h3>
            <p className="text-justify mb-2">La solicitud puede ser presentada a través de los siguientes canales:</p>
            <ul className="list-disc ml-8 space-y-1">
              <li><strong>Correo electrónico:</strong> privacidad@fondea.com</li>
              <li><strong>Correo postal:</strong> Lima, Perú (atención: Área de Protección de Datos Personales)</li>
              <li><strong>Presencial:</strong> En nuestras oficinas administrativas, previa cita</li>
            </ul>

            <h3 className="text-lg font-bold mt-5 mb-3">8.3. Plazo de Respuesta</h3>
            <p className="text-justify mb-3">
              FONDEA dará respuesta a la solicitud del titular en un plazo no mayor a diez (10) días hábiles contados desde la recepción de la solicitud. Este plazo podrá ser prorrogado por un período similar cuando la complejidad del caso lo justifique, previa comunicación al titular.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">8.4. Gratuidad</h3>
            <p className="text-justify mb-3">
              El ejercicio de los derechos establecidos en la Ley es gratuito. Sin embargo, si la solicitud es manifiestamente infundada o excesiva, especialmente por su carácter repetitivo, FONDEA podrá cobrar un canon razonable según lo establecido en la normativa vigente.
            </p>
          </section>

          {/* Artículo 9 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 9. COOKIES Y TECNOLOGÍAS SIMILARES</h2>
            <p className="mb-3 text-justify">
              La Plataforma utiliza cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el uso del sitio web y mostrar publicidad personalizada. Para obtener información detallada sobre el uso de cookies, incluyendo los tipos de cookies utilizadas, sus finalidades y la forma de gestionarlas, el titular puede consultar nuestra <Link to="/politica-cookies" className="text-blue-600 underline">Política de Cookies</Link>.
            </p>
          </section>

          {/* Artículo 10 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 10. MODIFICACIONES A LA POLÍTICA</h2>
            <p className="mb-3 text-justify">
              FONDEA se reserva el derecho de modificar la presente Política en cualquier momento para adaptarla a cambios normativos, jurisprudenciales o a nuevas prácticas empresariales. Cualquier modificación será comunicada a los titulares con una antelación mínima de quince (15) días calendario a través de los siguientes medios:
            </p>
            <ul className="list-disc ml-8 space-y-1">
              <li>Publicación en la Plataforma (www.fondea.com)</li>
              <li>Correo electrónico a la dirección registrada por el titular</li>
              <li>Notificación en la aplicación móvil</li>
            </ul>
            <p className="mt-4 text-justify">
              El uso continuado de la Plataforma o de los servicios de FONDEA después de la notificación de los cambios constituirá la aceptación de la nueva Política. Si el titular no está de acuerdo con las modificaciones, deberá cesar en el uso de la Plataforma y solicitar la cancelación de sus datos personales conforme al procedimiento establecido en el Artículo 8.
            </p>
          </section>

          {/* Artículo 11 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 11. INFORMACIÓN DE CONTACTO</h2>
            <p className="mb-3 text-justify">
              Para consultas, dudas o solicitudes relacionadas con el tratamiento de datos personales o la presente Política, el titular puede contactarse con FONDEA a través de los siguientes medios:
            </p>
            <div className="ml-6 mt-4">
              <p><strong>Razón Social:</strong> FONDEA</p>
              <p><strong>RUC:</strong> 20102222211</p>
              <p><strong>Domicilio Legal:</strong> Lima, Perú</p>
              <p><strong>Correo Electrónico:</strong> privacidad@fondea.com</p>
              <p><strong>Teléfono:</strong> +51 999 999 999</p>
              <p><strong>Horario de Atención:</strong> Lunes a Viernes de 9:00 AM a 6:00 PM</p>
            </div>
          </section>

          {/* Artículo 12 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 12. AUTORIDAD NACIONAL DE PROTECCIÓN DE DATOS PERSONALES</h2>
            <p className="mb-3 text-justify">
              De conformidad con el artículo 38 de la Ley, si el titular considera que sus derechos no han sido debidamente atendidos por FONDEA, puede presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales, adscrita al Ministerio de Justicia y Derechos Humanos, cuyos datos de contacto son:
            </p>
            <div className="ml-6 mt-4">
              <p><strong>Dirección:</strong> Calle Scipión Llona 350, Miraflores, Lima, Perú</p>
              <p><strong>Teléfono:</strong> (01) 311-4200</p>
              <p><strong>Correo Electrónico:</strong> consultas@minjus.gob.pe</p>
              <p><strong>Portal Web:</strong> www.minjus.gob.pe</p>
            </div>
          </section>

          {/* Artículo 13 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">ARTÍCULO 13. LEY APLICABLE Y JURISDICCIÓN</h2>
            <p className="text-justify">
              La presente Política se rige por las leyes de la República del Perú, en particular por la Ley N° 29733 y su Reglamento. Cualquier controversia que surja en relación con la interpretación o aplicación de esta Política será sometida a la jurisdicción de los jueces y tribunales de Lima, Perú, renunciando las partes expresamente a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          {/* Aceptación */}
          <section className="mb-8 bg-slate-50 p-6 border-l-4 border-slate-400">
            <p className="text-justify font-semibold">
              Al utilizar los servicios de FONDEA, el titular declara haber leído, comprendido y aceptado la presente Política de Privacidad y Protección de Datos Personales en su totalidad, y otorga su consentimiento informado, previo, libre, expreso e inequívoco para el tratamiento de sus datos personales conforme a los términos aquí establecidos.
            </p>
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
