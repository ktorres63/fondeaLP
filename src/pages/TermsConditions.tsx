import { Link } from "react-router";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-100 border-b border-slate-300 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-3 text-center uppercase">
            Términos y Condiciones Generales de Contratación
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
              Los presentes Términos y Condiciones Generales de Contratación (en adelante "los Términos") regulan el acceso y uso de los servicios de préstamos personales ofrecidos por FONDEA, identificada con RUC N° 20102222211, inscrita en la Superintendencia de Banca, Seguros y AFP (SBS) mediante Resolución N° 092223123123132, con domicilio legal en Lima, Perú.
            </p>
            <p className="mb-4 text-justify">
              Al solicitar un préstamo, el CLIENTE (persona natural mayor de edad) acepta de manera expresa e irrevocable los presentes Términos, así como las condiciones específicas establecidas en el contrato de préstamo que será suscrito de forma digital.
            </p>
            <p className="mb-4 text-justify">
              La relación contractual entre FONDEA y el CLIENTE se rige por lo dispuesto en el Código Civil peruano, la Ley N° 28587 (Ley Complementaria a la Ley de Protección al Consumidor en materia de servicios financieros), las normas emitidas por la SBS, y demás disposiciones legales aplicables.
            </p>
          </section>

          {/* Cláusula 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA PRIMERA: DEFINICIONES</h2>
            <p className="mb-3 text-justify">Para efectos de los presentes Términos, se entenderá por:</p>
            <dl className="ml-6 space-y-3">
              <div>
                <dt className="font-bold">a) FONDEA:</dt>
                <dd className="ml-4 text-justify">La empresa prestamista, titular de la plataforma digital.</dd>
              </div>
              <div>
                <dt className="font-bold">b) CLIENTE o PRESTATARIO:</dt>
                <dd className="ml-4 text-justify">Persona natural mayor de edad que solicita y obtiene un préstamo.</dd>
              </div>
              <div>
                <dt className="font-bold">c) PRÉSTAMO:</dt>
                <dd className="ml-4 text-justify">Operación de crédito mediante la cual FONDEA entrega una suma de dinero al CLIENTE, quien se obliga a devolver dicha suma más los intereses pactados.</dd>
              </div>
              <div>
                <dt className="font-bold">d) PLATAFORMA:</dt>
                <dd className="ml-4 text-justify">Sitio web www.fondea.com y aplicación móvil a través de los cuales se ofrecen y contratan los servicios.</dd>
              </div>
              <div>
                <dt className="font-bold">e) TEA:</dt>
                <dd className="ml-4 text-justify">Tasa de Interés Efectiva Anual, expresada en porcentaje.</dd>
              </div>
              <div>
                <dt className="font-bold">f) TCEA:</dt>
                <dd className="ml-4 text-justify">Tasa de Costo Efectivo Anual, que incluye todos los costos y gastos asociados al préstamo.</dd>
              </div>
              <div>
                <dt className="font-bold">g) CUOTA:</dt>
                <dd className="ml-4 text-justify">Pago mensual que incluye amortización del capital, intereses compensatorios y, de ser el caso, otros cargos autorizados.</dd>
              </div>
              <div>
                <dt className="font-bold">h) FECHA DE DESEMBOLSO:</dt>
                <dd className="ml-4 text-justify">Fecha en que FONDEA transfiere el monto del préstamo a la cuenta bancaria del CLIENTE.</dd>
              </div>
              <div>
                <dt className="font-bold">i) FECHA DE VENCIMIENTO:</dt>
                <dd className="ml-4 text-justify">Fecha en que el CLIENTE debe efectuar el pago de cada cuota mensual.</dd>
              </div>
            </dl>
          </section>

          {/* Cláusula 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA SEGUNDA: REQUISITOS PARA CONTRATAR</h2>
            <p className="mb-3 text-justify">Para acceder a un préstamo con FONDEA, el CLIENTE debe cumplir con los siguientes requisitos obligatorios:</p>
            <ol className="list-decimal ml-8 space-y-2">
              <li className="text-justify">Ser persona natural con plena capacidad de ejercicio, mayor de dieciocho (18) años de edad.</li>
              <li className="text-justify">Contar con Documento Nacional de Identidad (DNI) vigente o Carnet de Extranjería vigente.</li>
              <li className="text-justify">Tener domicilio en territorio peruano.</li>
              <li className="text-justify">Contar con una cuenta bancaria activa a nombre del solicitante en una entidad del sistema financiero nacional.</li>
              <li className="text-justify">Proporcionar un número de teléfono móvil activo y un correo electrónico válido.</li>
              <li className="text-justify">Tener ingresos económicos demostrables.</li>
              <li className="text-justify">No estar reportado en centrales de riesgo con calificación de dudoso, deficiente o pérdida.</li>
              <li className="text-justify">No tener procesos judiciales pendientes por delitos contra el patrimonio, lavado de activos o financiamiento del terrorismo.</li>
              <li className="text-justify">Aceptar los presentes Términos y Condiciones, así como la Política de Privacidad de FONDEA.</li>
            </ol>
            <p className="mt-4 text-justify">
              FONDEA se reserva el derecho de solicitar documentación adicional para verificar la información proporcionada por el CLIENTE, conforme a las normas de prevención de lavado de activos y financiamiento del terrorismo.
            </p>
          </section>

          {/* Cláusula 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA TERCERA: PROCESO DE SOLICITUD Y APROBACIÓN</h2>

            <h3 className="text-lg font-bold mt-5 mb-3">3.1. Solicitud</h3>
            <p className="text-justify mb-3">
              El CLIENTE deberá completar el formulario de solicitud en la Plataforma, proporcionando información veraz, exacta y actualizada. FONDEA se reserva el derecho de verificar la información mediante consultas a centrales de riesgo, validación de identidad con RENIEC, verificación laboral y cualquier otro medio legal disponible.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">3.2. Evaluación Crediticia</h3>
            <p className="text-justify mb-3">
              FONDEA evaluará la capacidad de pago del CLIENTE mediante modelos automatizados de scoring crediticio que consideran, entre otros factores: historial crediticio, ingresos mensuales, nivel de endeudamiento, comportamiento de pago histórico, y perfil de riesgo. La evaluación crediticia no garantiza la aprobación del préstamo.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">3.3. Aprobación</h3>
            <p className="text-justify mb-3">
              Si la solicitud es aprobada, FONDEA comunicará al CLIENTE las condiciones específicas del préstamo ofrecido, incluyendo: monto aprobado, plazo, tasa de interés (TEA), TCEA, monto de cada cuota mensual, fecha de vencimiento de cuotas, y cronograma de pagos. El CLIENTE tendrá un plazo de setenta y dos (72) horas para aceptar o rechazar la oferta.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">3.4. Contrato y Desembolso</h3>
            <p className="text-justify mb-3">
              Una vez que el CLIENTE acepte la oferta, se generará el contrato de préstamo digital. El CLIENTE deberá leer detenidamente el contrato y manifestar su conformidad mediante firma digital o aceptación electrónica. El desembolso se efectuará mediante transferencia bancaria a la cuenta proporcionada por el CLIENTE, en un plazo máximo de veinticuatro (24) horas hábiles desde la aceptación del contrato, sujeto a verificaciones finales de seguridad.
            </p>
          </section>

          {/* Cláusula 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA CUARTA: CONDICIONES ECONÓMICAS DEL PRÉSTAMO</h2>

            <h3 className="text-lg font-bold mt-5 mb-3">4.1. Monto del Préstamo</h3>
            <p className="text-justify mb-3">
              El monto mínimo del préstamo es de S/ 500.00 (Quinientos y 00/100 Soles) y el monto máximo es de S/ 25,000.00 (Veinticinco Mil y 00/100 Soles), sujeto a la evaluación crediticia del CLIENTE y al nivel de socio alcanzado en el sistema de progresión de FONDEA.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">4.2. Plazo</h3>
            <p className="text-justify mb-3">
              El plazo del préstamo será de tres (3) a doce (12) meses, pagadero en cuotas mensuales fijas, según lo acordado en el contrato específico. El plazo se cuenta desde la fecha de desembolso.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">4.3. Tasa de Interés Compensatorio (TEA)</h3>
            <p className="text-justify mb-3">
              La tasa de interés efectiva anual (TEA) es variable según el perfil de riesgo del CLIENTE y se encuentra en un rango desde 45% hasta 95% anual. La TEA aplicable a cada préstamo será informada al CLIENTE antes de la suscripción del contrato y permanecerá fija durante toda la vigencia del mismo.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">4.4. Tasa de Costo Efectivo Anual (TCEA)</h3>
            <p className="text-justify mb-3">
              La TCEA incluye la TEA más todos los costos asociados al préstamo (comisiones, seguros, gastos administrativos, etc.) y será informada al CLIENTE antes de la contratación, conforme a lo establecido en el Reglamento de Transparencia de Información y Contratación con Usuarios del Sistema Financiero de la SBS.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">4.5. Sistema de Amortización</h3>
            <p className="text-justify mb-3">
              Las cuotas se calculan bajo el sistema francés (cuotas fijas), salvo pacto en contrario. El cronograma de pagos será entregado al CLIENTE al momento de la suscripción del contrato.
            </p>
          </section>

          {/* Cláusula 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA QUINTA: FORMA Y LUGAR DE PAGO</h2>

            <h3 className="text-lg font-bold mt-5 mb-3">5.1. Fecha de Vencimiento</h3>
            <p className="text-justify mb-3">
              Las cuotas mensuales vencen el mismo día calendario de cada mes. Si la fecha de vencimiento coincide con un día no hábil (sábado, domingo o feriado), el vencimiento se traslada al siguiente día hábil. El pago debe estar efectivamente acreditado antes de las 6:00 PM (hora de Lima) para considerarse oportuno.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">5.2. Canales de Pago</h3>
            <p className="text-justify mb-3">El CLIENTE podrá realizar los pagos a través de los siguientes canales:</p>
            <ul className="list-disc ml-8 space-y-1">
              <li>Débito automático desde cuenta bancaria (previa autorización del CLIENTE)</li>
              <li>Transferencia bancaria a las cuentas de FONDEA</li>
              <li>Pago en agentes autorizados y establecimientos afiliados</li>
              <li>Pago con tarjeta de débito o crédito a través de la Plataforma</li>
              <li>Pago en oficinas de FONDEA (previa cita)</li>
            </ul>

            <h3 className="text-lg font-bold mt-5 mb-3">5.3. Imputación de Pagos</h3>
            <p className="text-justify mb-3">
              Los pagos efectuados por el CLIENTE se imputarán en el siguiente orden: (i) intereses moratorios, (ii) intereses compensatorios, (iii) comisiones y gastos, y (iv) capital. El CLIENTE podrá solicitar una imputación diferente, sujeta a la aceptación de FONDEA.
            </p>
          </section>

          {/* Cláusula 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA SEXTA: MORA Y PENALIDADES</h2>

            <h3 className="text-lg font-bold mt-5 mb-3">6.1. Intereses Moratorios</h3>
            <p className="text-justify mb-3">
              En caso de incumplimiento en el pago de cualquier cuota en la fecha de vencimiento, se generarán intereses moratorios sobre el monto de la cuota vencida, a razón de 5% mensual (0.16% diario), sin capitalización. Los intereses moratorios se aplicarán desde el día siguiente al vencimiento hasta la fecha de pago efectivo.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">6.2. Penalidad por Mora</h3>
            <p className="text-justify mb-3">
              Adicionalmente a los intereses moratorios, se aplicará una penalidad de S/ 30.00 (Treinta y 00/100 Soles) por cada cuota impaga, conforme a lo autorizado por las normas de la SBS.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">6.3. Reporte a Centrales de Riesgo</h3>
            <p className="text-justify mb-3">
              Si el CLIENTE incurre en mora por más de ocho (8) días calendario, FONDEA está facultada para reportar dicha situación a las centrales de riesgo (Equifax, Sentinel, Infocorp), lo cual podrá afectar el historial crediticio del CLIENTE y su capacidad para obtener créditos futuros en el sistema financiero.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">6.4. Gestión de Cobranza</h3>
            <p className="text-justify mb-3">
              FONDEA realizará gestiones de cobranza mediante llamadas telefónicas, mensajes de texto (SMS), correos electrónicos, WhatsApp, y visitas domiciliarias. Estas gestiones se realizarán respetando la dignidad del CLIENTE y en cumplimiento del Reglamento de Gestión de Conducta de Mercado emitido por la SBS. El CLIENTE autoriza expresamente estas gestiones al aceptar los presentes Términos.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">6.5. Aceleración de Plazo</h3>
            <p className="text-justify mb-3">
              Si el CLIENTE incurre en mora por más de noventa (90) días calendario, FONDEA podrá declarar el vencimiento anticipado de la totalidad de la deuda, exigiendo el pago inmediato del saldo de capital, intereses devengados, intereses moratorios, penalidades y gastos de cobranza.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">6.6. Acciones Legales</h3>
            <p className="text-justify mb-3">
              En caso de incumplimiento del CLIENTE, FONDEA podrá iniciar las acciones legales correspondientes para el cobro de la deuda, incluyendo procesos judiciales y extrajudiciales, cuyos costos y gastos (honorarios de abogados, gastos notariales, etc.) serán asumidos por el CLIENTE.
            </p>
          </section>

          {/* Cláusula 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA SÉPTIMA: PREPAGO Y CANCELACIÓN ANTICIPADA</h2>

            <h3 className="text-lg font-bold mt-5 mb-3">7.1. Derecho de Prepago</h3>
            <p className="text-justify mb-3">
              El CLIENTE tiene el derecho de efectuar el pago anticipado de la totalidad o parte del préstamo en cualquier momento, sin que FONDEA pueda cobrar penalidad, comisión o gasto alguno por dicho prepago, de conformidad con el artículo 1123 del Código Civil y el Reglamento de Transparencia de la SBS.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">7.2. Prepago Parcial</h3>
            <p className="text-justify mb-3">
              En caso de prepago parcial, el CLIENTE podrá optar por: (a) reducir el monto de las cuotas mensuales manteniendo el plazo original, o (b) reducir el plazo del préstamo manteniendo el monto de las cuotas. La opción deberá ser comunicada por el CLIENTE al momento del prepago; caso contrario, se aplicará la opción (a) por defecto.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">7.3. Prepago Total</h3>
            <p className="text-justify mb-3">
              Para efectuar el prepago total, el CLIENTE deberá contactar a FONDEA para obtener el saldo actualizado, que incluirá: capital pendiente más intereses compensatorios devengados hasta la fecha de prepago. FONDEA proporcionará la liquidación en un plazo máximo de dos (2) días hábiles.
            </p>
          </section>

          {/* Cláusula 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA OCTAVA: OBLIGACIONES DEL CLIENTE</h2>
            <p className="mb-3 text-justify">El CLIENTE se obliga a:</p>
            <ol className="list-decimal ml-8 space-y-2">
              <li className="text-justify">Proporcionar información veraz, exacta y completa al momento de solicitar el préstamo.</li>
              <li className="text-justify">Destinar el préstamo exclusivamente para fines lícitos y personales.</li>
              <li className="text-justify">Efectuar el pago de las cuotas en las fechas de vencimiento establecidas.</li>
              <li className="text-justify">Mantener actualizada su información de contacto (dirección, teléfono, correo electrónico) durante toda la vigencia del contrato.</li>
              <li className="text-justify">Notificar a FONDEA cualquier cambio en su situación laboral, económica o domiciliaria que pueda afectar su capacidad de pago, dentro de los diez (10) días siguientes de ocurrido el cambio.</li>
              <li className="text-justify">No ceder, transferir ni gravar los derechos u obligaciones derivados del contrato sin el consentimiento previo y por escrito de FONDEA.</li>
              <li className="text-justify">Permitir las gestiones de cobranza y verificación que realice FONDEA dentro del marco legal.</li>
              <li className="text-justify">Cumplir con todas las condiciones establecidas en el contrato de préstamo y en los presentes Términos.</li>
            </ol>
          </section>

          {/* Cláusula 9 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA NOVENA: OBLIGACIONES DE FONDEA</h2>
            <p className="mb-3 text-justify">FONDEA se obliga a:</p>
            <ol className="list-decimal ml-8 space-y-2">
              <li className="text-justify">Desembolsar el monto del préstamo aprobado en el plazo establecido, una vez suscrito el contrato.</li>
              <li className="text-justify">Proporcionar al CLIENTE el cronograma de pagos y toda la información relevante sobre las condiciones del préstamo.</li>
              <li className="text-justify">Mantener la confidencialidad de la información del CLIENTE conforme a la Ley de Protección de Datos Personales.</li>
              <li className="text-justify">Atender las consultas y reclamos del CLIENTE en los plazos establecidos por la normativa de la SBS.</li>
              <li className="text-justify">Cumplir con las normas de transparencia y protección al consumidor financiero emitidas por la SBS.</li>
            </ol>
          </section>

          {/* Cláusula 10 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA DÉCIMA: CAUSALES DE RESOLUCIÓN DEL CONTRATO</h2>
            <p className="mb-3 text-justify">El contrato de préstamo podrá resolverse por las siguientes causales:</p>
            <ol className="list-decimal ml-8 space-y-2">
              <li className="text-justify">Incumplimiento del CLIENTE en el pago de tres (3) o más cuotas consecutivas.</li>
              <li className="text-justify">Declaración de insolvencia o inicio de procedimiento concursal del CLIENTE.</li>
              <li className="text-justify">Comprobación de que el CLIENTE proporcionó información falsa o inexacta al solicitar el préstamo.</li>
              <li className="text-justify">Utilización del préstamo para fines ilícitos.</li>
              <li className="text-justify">Fallecimiento del CLIENTE (sin perjuicio de las acciones legales contra sus herederos).</li>
              <li className="text-justify">Mutuo acuerdo entre las partes.</li>
            </ol>
            <p className="mt-4 text-justify">
              La resolución del contrato no exime al CLIENTE de cumplir con las obligaciones de pago vencidas e impagas.
            </p>
          </section>

          {/* Cláusula 11 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA DÉCIMO PRIMERA: MODIFICACIÓN DE LOS TÉRMINOS</h2>
            <p className="text-justify mb-3">
              FONDEA se reserva el derecho de modificar los presentes Términos en cualquier momento. Las modificaciones serán notificadas a los CLIENTES con una antelación mínima de quince (15) días calendario mediante correo electrónico, publicación en la Plataforma, y/o notificación en la aplicación móvil.
            </p>
            <p className="text-justify mb-3">
              Las modificaciones no afectarán los contratos de préstamo ya suscritos, los cuales se regirán por los Términos vigentes al momento de su contratación, salvo modificaciones que sean más favorables para el CLIENTE.
            </p>
          </section>

          {/* Cláusula 12 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA DÉCIMO SEGUNDA: PROTECCIÓN AL CONSUMIDOR</h2>
            <p className="text-justify mb-3">
              El CLIENTE tiene derecho a presentar reclamos ante FONDEA a través del Libro de Reclamaciones disponible en <Link to="/libro-reclamaciones" className="text-blue-600 underline">www.fondea.com/libro-reclamaciones</Link> o en nuestras oficinas. FONDEA atenderá los reclamos en un plazo máximo de treinta (30) días calendario.
            </p>
            <p className="text-justify mb-3">
              Si el CLIENTE no está conforme con la respuesta de FONDEA, puede acudir a INDECOPI (Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual) o a la Defensoría del Cliente Financiero de la SBS.
            </p>
          </section>

          {/* Cláusula 13 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA DÉCIMO TERCERA: LEY APLICABLE Y JURISDICCIÓN</h2>
            <p className="text-justify mb-3">
              Los presentes Términos se rigen por las leyes de la República del Perú. Cualquier controversia derivada de la interpretación o ejecución de estos Términos o del contrato de préstamo será sometida a la jurisdicción de los jueces y tribunales de Lima, Perú, renunciando las partes expresamente a cualquier otro fuero que pudiera corresponderles.
            </p>
            <p className="text-justify mb-3">
              Previamente a cualquier acción judicial, las partes se comprometen a intentar resolver la controversia mediante mecanismos alternativos de solución de conflictos (conciliación o arbitraje), de acuerdo con lo establecido en el contrato específico.
            </p>
          </section>

          {/* Cláusula 14 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">CLÁUSULA DÉCIMO CUARTA: DISPOSICIONES FINALES</h2>

            <h3 className="text-lg font-bold mt-5 mb-3">14.1. Integralidad</h3>
            <p className="text-justify mb-3">
              Los presentes Términos, junto con el contrato de préstamo específico y la Política de Privacidad, constituyen el acuerdo íntegro entre las partes y reemplazan cualquier acuerdo o entendimiento previo, verbal o escrito.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">14.2. Independencia de Cláusulas</h3>
            <p className="text-justify mb-3">
              Si alguna disposición de estos Términos fuera declarada nula o inválida por autoridad competente, las demás disposiciones mantendrán su plena vigencia y efecto.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">14.3. Renuncia</h3>
            <p className="text-justify mb-3">
              La falta de ejercicio por parte de FONDEA de cualquier derecho o facultad conferida en estos Términos no constituirá renuncia a dicho derecho o facultad.
            </p>

            <h3 className="text-lg font-bold mt-5 mb-3">14.4. Notificaciones</h3>
            <p className="text-justify mb-3">
              Todas las notificaciones relacionadas con el contrato serán enviadas a las direcciones de correo electrónico y domicilios proporcionados por las partes. Es responsabilidad del CLIENTE mantener actualizados sus datos de contacto.
            </p>
          </section>

          {/* Información de Contacto */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">INFORMACIÓN DE CONTACTO</h2>
            <div className="ml-6">
              <p><strong>Razón Social:</strong> FONDEA</p>
              <p><strong>RUC:</strong> 20102222211</p>
              <p><strong>Resolución SBS:</strong> N° 092223123123132</p>
              <p><strong>Domicilio Legal:</strong> Lima, Perú</p>
              <p><strong>Correo Electrónico:</strong> legal@fondea.com</p>
              <p><strong>Teléfono:</strong> +51 999 999 999</p>
              <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
            </div>
          </section>

          {/* Aceptación */}
          <section className="mb-8 bg-slate-50 p-6 border-l-4 border-slate-400">
            <p className="text-justify font-semibold">
              AL ACEPTAR ESTOS TÉRMINOS Y CONDICIONES Y SUSCRIBIR EL CONTRATO DE PRÉSTAMO, EL CLIENTE DECLARA HABER LEÍDO, COMPRENDIDO Y ACEPTADO TODAS LAS CLÁUSULAS AQUÍ CONTENIDAS, MANIFESTANDO SU CONFORMIDAD EXPRESA E IRREVOCABLE CON LAS MISMAS.
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
